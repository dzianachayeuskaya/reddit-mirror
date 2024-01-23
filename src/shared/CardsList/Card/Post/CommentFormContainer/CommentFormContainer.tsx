import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducer';
import { CommentForm } from '../CommentForm/CommentForm';
import { IUserData } from '../../../../../hooks/useUserData';
import { updateComment } from '../../../../store/actions';
import { Formik, FormikProps } from 'formik';

export enum ECommentFormPlace {
  Comment = 'Comment',
  Answer = 'Answer',
}

interface ICommentFormProps {
  place: ECommentFormPlace;
  commentAuthor?: string;
}

export function CommentFormContainer({ place, commentAuthor }: ICommentFormProps) {
  const userData = useSelector<RootState, IUserData | null>(state => state.me.data);
  const value = useSelector<RootState, string>(state => state.commentText)
  const dispatch = useDispatch();

  const [answerValue, setAnswerValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>, props: FormikProps<{
    comment: string;
  }>) {
    props.handleChange(event)
    place === ECommentFormPlace.Comment ? dispatch(updateComment(event.target.value)) : setAnswerValue(event.target.value)
  }

  useEffect(() => {
    if (place === ECommentFormPlace.Answer && userData) {
      setAnswerValue(`${commentAuthor}, `)
    }
  }, [])

  return (
    <Formik
      initialValues={{ comment: place === ECommentFormPlace.Comment ? value : answerValue }}
      onSubmit={(values) => {
        console.log('Submit', values.comment);
      }}
    >{props => (<CommentForm
      props={props}
      onChange={(e) => handleChange(e, props)}
      user={userData}
      place={place}
    />
    )}
    </Formik >
  )
}
