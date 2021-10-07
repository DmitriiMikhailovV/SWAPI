import { SpinnerContainer, Spinner } from "./styles"

const Loading = ({ loading }) => {
  return (
    <SpinnerContainer>
      <Spinner loading={+loading} />
    </SpinnerContainer>
  )
}

export default Loading
