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

var comments = new app.collections.Comment;



var CommentBlock = React.createClass({
    getInitialState: function () {
        return ({data:[]})
    },
    loadCommentsFromServer: function () {
        comments.fetch({success: (c,r,o)=>{this.setState({data: c})}})
    },
    componentDidMount: function () {
        comments.on('remove', (m,c) => {
          this.setState({data: c})
        });
        this.loadCommentsFromServer()
    },
    onSubmit: function (options) {
        let model = new comments.model(options);
        comments.add(model);
        model.save({},{success:(m,r,o)=> {
            this.setState({data: m.collection})
            }
        })
    },
    render: function () {
        return (
            <div className="commentsBox">
            <h1>Comments
            <CommentList data={this.state.data}/>
        <CommentForm onSubmit={this.onSubmit}/>
        </h1>
        </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        var comments = this.props.data.map((com)=> {
            return (
              <Comment item={com} key={com.id}>
              </Comment>
            )
    });

        return (
            <ul>
            {comments}
            </ul>
        )
    }
});

var Comment = React.createClass({
    remove: function () {
      this.props.item.destroy();
    },
    render: function () {
        return <li>
            <div class="comment__author">{this.props.item.get('author')}</div>
            <div class="comment__text">{this.props.item.get('text')}</div>
            <div class="comment__remove" onClick={this.remove}>X</div>
        </li>
    }
});

var CommentForm = React.createClass({
    getInitialState: function () {
        return {author:'', text: ''}
    },
    handleAuthorChange: function (e) {
        this.setState({author: e.target.value})
    },
    handleTextChange: function (e) {
        this.setState({text: e.target.value})
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if(!author || !text) return;
        this.props.onSubmit({author, text});
        this.setState({author:'', text: ''})
    },
    render: function () {
        return <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.author}
              placeholder="Type a author"
              type="text"
              onChange={this.handleAuthorChange}
            />
            <input
              value={this.state.text}
              placeholder= "Type a text"
              type="text"
              onChange={this.handleTextChange}
            />
            <input type="submit" value="Post" />
        </form>
    }
});


ReactDOM.render(<CommentBlock url="/api/comments"/>, document.getElementById('container'));