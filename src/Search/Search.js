// Contains a form with the input element and the search button, contains functions that handle the input element and resets the field, and also contains a function that calls the search function which is passed as props to it

import { useState } from 'react';
import {InputGroup, InputGroupAddon, Input, Button} from 'reactstrap';
import './Search.css';

export const Searchbar = params => {

    const [query, setQuery] = useState('');

    const HandleChange = (e) => {
        setQuery(e.target.value);
    }

    const HandleClick = () => {
        setQuery('');
        params.setSearchQuery(query);
    }

    return (
        <InputGroup className="SearchbarInput">
            <Input placeholder="Search..." onChange={HandleChange} value={query}/>
                <InputGroupAddon addonType="append">
                    <Button color="secondary" onClick={HandleClick}>Search</Button>
            </InputGroupAddon>
        </InputGroup>
    );
}