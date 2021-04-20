import * as React from "react";
import { Route } from 'react-router-dom';
import { InviteEdit } from './invite/InviteEdit';
import { ProjectPdfContent} from './projects/ProjectsShow';

export default [
    <Route exact path="/invite/confirm/:token" component={InviteEdit} noLayout />,
    <Route exact path="/projects/:id/pdf" component={ProjectPdfContent} noLayout />,
];


