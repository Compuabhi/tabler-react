// @flow

import * as React from "react";
import cn from "classnames";
import Media from "../Media/Media.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +avatarURL?: string,
  +name?: string,
  +date?: string,
  +text?: string,
|};

function CommentReply({
  className,
  children,
  avatarURL,
  name,
  date,
  text,
}: Props): React.Node {
  const classes = cn({}, className);

  return (
    <Media.ListItem className={classes}>
      <Media.Object avatar objectURL={avatarURL} className="mr-4" />
      {null}
      <Media.Body>
        <strong>{name}: </strong>
        {text}
      </Media.Body>
    </Media.ListItem>
  );
}

export default CommentReply;