import React, {useEffect, useState } from 'react';
import { Card, Avatar, Col, Row, Modal } from 'antd';

import { EditOutlined, EllipsisOutlined, EyeOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Movies = (props) => {
    //3168cfc1
    const [ movies, setMovies ] = useState ([]) ;
    const [showModal, setShowModal] = useState( false)


  useEffect(()=> {
    const getMovies = async ()=>{
        const response = await fetch('http://www.omdbapi.com/?apikey=3168cfc1&s=cars') //hace consulta externa al API asincrona
        const data = await response.json()
        console.log( 'MOVIES', data)

        setMovies( data.Search )
    };
    getMovies()
    }, [] );

    const handleViewDetails = (id) => {
        setShowModal(true);
    }
    return (
        <>
            <Row>
                {
                    movies.map((movie, index) => {
                        return (
                            <Col>
                            <Card
                                style={ {
                                    width: 300,
                                    marginRight:20,
                                    marginBottom:30 } }
                                cover={
                                    <img
                                        alt="example"
                                        src={movie.Poster}
                                    />
                                }
                                actions={[
                                    <EyeOutlined  key="setting" onClick={ () => handleViewDetails(movie.imdbID)}/>,
                                    <EditOutlined key="edit" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={movie.Title}
                                    description={`${movie.Type} - ${movie.Year}`}
                                />
                            </Card>
                            </Col>
                        )
                    })
                }
            </Row>
            <Modal
                title="Basic Modal"
                visible={ showModal }
//                onOk={this.handleOk}
//                onCancel={this.handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );

};

export default Movies;