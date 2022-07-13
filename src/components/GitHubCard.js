import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card'
import PFP from './githubPFP.png'

export default function GitHubCard(){

    return(
        <div>
            <Card style={{width:'18rem'}}>
                <Card.Img variant="top" src={PFP}/>
                <Card.Body>
                    <Card.Title>
                        Gabriel Espejo
                    </Card.Title>
                    <Card.Text>
                        Software engineering degree haver, pretend storyteller, vtuber fan
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}