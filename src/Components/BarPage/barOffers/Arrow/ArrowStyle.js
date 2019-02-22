import Styled from 'styled-components'

export const Arrow = Styled.span`
  width: 13px
  height: 13px
  display: inline-block
  position: relative
  bottom: -5px
  left: -10px
  transition: 0.4s ease
  margin-top: 2px
  text-align: left
  transform: rotate(45deg)
  float: right
  &:before, &:after
    position: absolute
    content: ''
    display: inline-block
    width: 12px
    height: 3px
    background-color: #fff
    transition: 0.4s ease
  &:after
    position: absolute
    transform: rotate(90deg)
    top: -5px
    left: 5px
`
