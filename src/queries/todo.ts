import { gql } from "@apollo/client"

export const GET_TODOS = gql`
  query {
    getTodos @client
  }
`

/* 서버에 요청하는 쿼리의 필드에도 로컬 전용 필드를 추가해 동시에 가져올 수 도 있다.
  query userInfo {
    name
    phone
    getTodos @client
  }
 */
