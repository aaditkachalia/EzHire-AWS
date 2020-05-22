import React from "react"
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Icon from "@material-ui/core/Icon";
import Open_Chatbot from "views/Open_Chatbot/Open_Chatbot.js"
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import LocalOffer from "@material-ui/icons/LocalOffer";
const useStyles = makeStyles(styles)

export default function InterviewCard(){

	const classes = useStyles();
	return(
		<div>
		<GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Recruited By</p>
              <h3 className={classes.cardTitle}>4 <small> Companies </small></h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
               Thats a great number
              </div>
             </CardFooter>
          </Card>
        </GridItem>
        </div>
		)
}