import { Spin } from 'antd'
import React from 'react'
import styled from 'styled-components'
type PropsType={
    loading?:boolean
}
const LoadingScreen = ({loading}: PropsType) => {
  return (
    <>
      {loading && (
        <LoadingScreenStyle>
          <Spin spinning={loading} />
        </LoadingScreenStyle>
      )}
    </>
  );
};

export default LoadingScreen

const LoadingScreenStyle=styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
`