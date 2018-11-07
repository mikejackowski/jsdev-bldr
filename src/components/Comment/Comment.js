import React from 'react';
import styled from 'styled-components';
import pic from '../../assets/images/hs.png';
import propTypes from 'prop-types';
import { formatDistance } from 'date-fns';

const StyledWrapper = styled.div`
  width: 427px;
  padding: 30px 8px 25px 20px;
  border-bottom: 1px solid #EBEBEB;
  display: grid;
  grid-template-columns: 40px auto;
  grid-column-gap: 11px;

  @media (max-width: 500px) {
    padding: 20px 16px 20px 20px;
    width: 237px;
  }

  &:first-child {
    padding-top: 0;
  }
`
const StyledImg = styled.img`
  width: 40px;
  height: 40px;
`
const StyledName = styled.div`
  font-family: Montserrat-Regular;
  font-size: 14px;
  color: #002C71;
  letter-spacing: 0;
`
const StyledDate = styled.div`
  opacity: 0.5;
  font-family: Montserrat-Regular;
  font-size: 14px;
  color: #002C71;
  letter-spacing: 0;
`
const StyledCommentText = styled.div`
  font-family: Montserrat-Regular;
  font-size: 14px;
  color: #444444;
  letter-spacing: 0;
  line-height: 21px;
`

const StyledCommentContentWrapper = styled.div`
  margin: 0;
  padding: 0;
  text-align: justify;
`

const StyledCommentTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
`
function FormatDate(dateString) {
  return formatDistance(new Date(dateString).toISOString(), new Date().toISOString());

}

const Comment = (props) => (
  <StyledWrapper>
    <StyledImg src={pic}/>
    <StyledCommentContentWrapper>
      <StyledCommentTopWrapper>
        <StyledName>{props.name}</StyledName>
        <StyledDate>
          {FormatDate(props.commentDate)}
        </StyledDate>
      </StyledCommentTopWrapper>
      <StyledCommentText>{props.commentValue}</StyledCommentText>
    </StyledCommentContentWrapper>
  </StyledWrapper>
)

Comment.defaultProps = {
  name: 'Rachel Zein',
  commentValue: propTypes.element.isRequired,
  commentDate: '1d'
}

Comment.propTypes = {
  name: propTypes.string,
  commentValue: propTypes.string,
  commentDate: propTypes.string
}
export default Comment;