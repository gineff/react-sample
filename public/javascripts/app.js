/**
 * Created by Gineff on 21.05.2016.
 */
/**
 * Created by Андрей on 20.05.2016.
 */


/*
 CommentsBlock
 CommentsList
 Comment
 CommentForm
 * */

;

var CommentBlock = React.createClass({
    getInitialState: function () {
        return ({data:[]})
    },
    loadCommentsFromServer: function () {

        $.get(this.props.url,{} ,function (data) {
            this.setState({data: data})
        }.bind(this));
        /*$.ajax({
         url: this.props.url,
         type: 'json',
         cache: false,
         success: function(data) {
         this.setState({data: data})
         }.bind(this),
         error: function(xhr, status, err) {

         }.bind(this)
         })*/
    },
    componentDidMount: function () {

        this.loadCommentsFromServer()
    },
    render: function () {
        return (
            <div className="commentsBox">
            <h1>Comments
            <CommentList data={this.state.data}/>
        <CommentForm/>
        </h1>
        </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        var comments = this.props.data.map((com)=> {
                return (<Comment item={com}/>)
    });

        return (
            <ul>
            {comments}
            </ul>
        )
    }
});

var Comment = React.createClass({
    render: function () {
        return <li key={this.props.item.author}>{this.props.item.author}</li>
    }
});

var CommentForm = React.createClass({
    render: function () {
        return <form/>
    }
});

console.log(-1);
ReactDOM.render(<CommentBlock url="/api/comments"/>, document.getElementById('container'));