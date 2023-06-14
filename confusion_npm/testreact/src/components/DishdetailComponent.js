import React, { Component } from 'react';
// import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {    
        super(props);

    }

    renderComments(dish) {
        if (dish != null)
        return(
            <Card className = "text-left">
                <CardBody>
                <CardTitle><h4>Comment</h4></CardTitle>
                {dish.comments.map((commento) => {
                 return(
                    <>
                    
                      
                      <CardText>{commento.comment}</CardText>
                      <CardText>--{commento.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commento.date)))}</CardText>
                   
                    </>
                    
                 );             
                })

                }
                 </CardBody><i class="fa fa-xing" aria-hidden="true"></i>
            </Card>
        );
    else
        return(
            <div></div>
        );
    }
    render() {
        return (
            <div className='col-md-5'>
                {this.renderComments(this.props.selectedDish)}
            </div>
        )
    }
}


export default DishDetail;
