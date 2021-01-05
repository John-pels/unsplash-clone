export default ({ $axios }) => {
  $axios.onRequest((config) => {
    config.headers.common.Authorization = `Client-ID 1mC0SNwJkSVnt1PGVOE1hSrP7fkMyLJpUwJjeahw5-A`
  })
}
