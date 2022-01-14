import React from "react";
import { CardBody, Card } from 'reactstrap';

const ProjectCard = ({ codesArr, linkObj, title, descStr }) => {
    return (
        <Card className='mb-4'>
            <CardBody>
                <code>{codesArr.length === 1 ? codesArr.map(x => x) : codesArr.map(x => x + " ")}</code>
                <h4>
                    <a class="link hover-2" id='project-link' href={linkObj.github}>{title}</a>
                </h4>
                <a class='link hover-2' href={linkObj.demo}>Demo</a>
                <p id='content' className='lead'>{descStr}</p>
            </CardBody>
        </Card>
    );
}

export default ProjectCard;