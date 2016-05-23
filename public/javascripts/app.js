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
var Comments = app.collections.Comments;
//setTimeout(()=>{app.collections.comment.fetch({query:{}},(res)=>{console.log(res)})},200);
var comments =  new Comments([{author: "Bob", text: "cool"}]);

comments.each(el => el.save({}, function (res) {
    console.log(res);
}));

var CommentBlock = React.createClass({
    getInitialState: function () {
        return ({data:[]})
    },
    loadCommentsFromServer: function () {
        
        $.get(this.props.url,{} ,function (response) {
            //console.log(app);
            //console.log(new app.collections.Comments(response));
            //var data = app.collections.Comment(response);
            this.setState({data: response})
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
                return (<Comment item={com}>
                    {com.text}
                </Comment>)
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
        return <li key={this.props.item.author}>{this.props.children}
        </li>
    }
});

var CommentForm = React.createClass({
    render: function () {
        return <form/>
    }
});


ReactDOM.render(<CommentBlock url="/api/comments"/>, document.getElementById('container'));