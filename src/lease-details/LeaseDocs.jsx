import React from 'react';
import {Button, ButtonGroup, Row, Col, DropdownButton, MenuItem} from 'react-bootstrap';

function LeaseDocs({ agreements, statements, ...props }) {

    const agreementDropdownRows = agreements.map((agreement, index) => {
        return <MenuItem key={index} href={agreement.link}>{agreement.createdAt}</MenuItem>
    });

    const statementDropdownRows = statements.map((statement, index) => {
        return <MenuItem key={index} href={statement.link}>{statement.createdAt}</MenuItem>
    });

    return (
        <ButtonGroup>
            <DropdownButton id="dropDownMenu" bsStyle="primary" title='Agreements'>
                {agreementDropdownRows}
            </DropdownButton>
            <DropdownButton id="dropDownMenu" bsStyle="primary" title='Statements'>
                {statementDropdownRows}
            </DropdownButton>
        </ButtonGroup>
    );
}
export default LeaseDocs;