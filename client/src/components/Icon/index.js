import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  media: {
    width: 204,
    height: 204,
  },
});

function Icon() {
  const classes = useStyles();

  return (
    <div>
      <Card
        style={{
          backgroundImage: `url("https://uc0e08d5af670aeeb63e28c24c1e.previews.dropboxusercontent.com/p/thumb/ABGg7SRKmFGJYgGDxiyBbq4jjV4gLW0OJBsdC-5xdqS9O64AkwdPoKh2WkwiFfAAP8cI5WyYGTdNsTC4hl0bI8WxW81IsiDaAGapd9LzT--EhOvwlaWZ_t7y8Y8XO5eS8B_Qhpz3LWTFm31bgq_IR616R_475LkZTE_jAsCJ4Q52n3nkWQ43PuMONhY1uvn20ZAGYjLnEC9FDgwliMa0CkwcbIP0XZC2VUSaXoTeA6BZ4ug38zhYUsgxuZpoE0WaLMo4Q0zJ4VKfs_LaPQRxjP097hXisf6G3P9BBs0ahXfOmBqCBgR1wHqL8WNcd7-3OKf95Ll9ZWpEu8gANp8rA3oS6bRIYZRprtbTI0RHgcxzeTWd5b4b0uK_0O5-mgW7K6afXPR0XrhuNWtEckKdAT1E/p.png?fv_content=true&size_mode=5")`,
        }}
      >
        <CardMedia className={classes.media}>
          {/* <img src={Icon1}></img> */}
        </CardMedia>
      </Card>
    </div>
  );
}

export default Icon;
