import React, {Component} from 'react';
import Movie from './Movie';
import {loadMovies} from '../../models/movie';
import {Link} from 'react-router';
//import observer from '../../models/observer';
import Reactable from 'reactable';
import TableTemplate from '../common/Table';

let Table = Reactable.Table;
let Thead = Reactable.Thead;
let Th = Reactable.Th;

export default class MoviesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        // Display movies
        this.setState({movies: response})
    }

    componentDidMount() {
        // Request list of movies from the server
        loadMovies(this.onLoadSuccess);
    }

    render() {
        let data = this.state.movies;

        return (

            <div>
                <h1>Movie Page</h1>
                <Link to="/create" className="btn btn-default" >Create movie</Link>
                {/*<div>*/}
                    {/*<table className="table-striped">*/}
                        {/*<thead>*/}
                            {/*<tr>*/}
                                {/*<td>Title</td>*/}
                                {/*<td>Summary</td>*/}
                                {/*<td>Director</td>*/}
                                {/*<td>Genre</td>*/}
                                {/*<td>Rating (1/10)</td>*/}
                                {/*<td>Release Date</td>*/}
                                {/*<td>Actions</td>*/}
                            {/*</tr>*/}
                        {/*</thead>*/}
                        {/*<tbody>*/}
                        {/*{this.state.movies.map((e, i) => {*/}
                            {/*return <Movie key={i}*/}
                                          {/*id={e._id}*/}
                                          {/*title={e.title}*/}
                                          {/*summary={e.summary}*/}
                                          {/*director={e.director}*/}
                                          {/*genre={e.genre}*/}
                                          {/*rating={e.rating}*/}
                                          {/*date={e.date}/>*/}
                        {/*})}*/}
                        {/*</tbody>*/}
                    {/*</table>*/}
                {/*</div>*/}
                <TableTemplate
                    className="table"
                    filterable={['title', 'summary', 'director', 'genre', 'rating','date']}
                    noDataText="No matching records found"
                    itemsPerPage={5}
                    currentPage={0}
                    sortable={true}
                    data={data}
                   />
            </div>
        );
    }
}