import styled from "styled-components"
export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image: url('https://img.freepik.com/free-photo/vintage-grunge-blue-concrete-texture-studio-wall-background-with-vignette_1258-28513.jpg?w=1380&t=st=1677931427~exp=1677932027~hmac=7b19899e61d943ea1a74796824c4c9174d03c9049d3c8061186ef02b1c82e8e7');
min-height: 100vh;
background-size: cover;
padding-bottom: 50px;
`
export const MainContaineryoutube = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image: white;
min-height: 100vh;
background-size: cover;
padding-bottom: 50px;
`

export const Title = styled.h1`
text-align: center;
color: orange;
font-family: 'Roboto';
font-weight: 600;
font-size: 36px;
margin: 0px;
margin-top: 30px;
@media screen and (min-width: 768px) {
  font-size: 46px;
}
`

export const Description = styled.p`
text-align: center;
color: #e2e8f0;
font-family: 'Roboto';
font-size: 16px;
margin-bottom: 40px;
@media screen and (min-width: 768px) {
  font-size: 20px;
}
`

// CLOCK
