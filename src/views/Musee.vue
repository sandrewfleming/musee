<template>
 <div class="md-card">
 <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title"><span>Warhol test{{ artist }}</span></div>
          <div class="md-subhead">
          </div> 

        </md-card-header-text>

        <md-card-media md-big>
          <img src="/assets/examples/cover.png" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>

  </div>
</template>
<style lang="scss" scoped>
  .md-card {
    width: 95%;
    margin: auto;
    display: inline-block;
    vertical-align: top;
};
 .box {
   width: 50px;
   padding: 0px;
}
</style>
 <script>
  export default {
    name: 'app',
    data () {
      return {
        artist: []
      }
    },
    methods: {
      fetchUsers: function () {
        const baseURI = 'https://api.artsy.net/api/artists/andy-warhol'
        const headers = {
            "type": "xapp_token",
            "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTU1NDc2MDUzMywiaWF0IjoxNTU0MTU1NzMzLCJhdWQiOiI1YjdlMjBjNGYxNTFkYTZmZTRiNzkyMDMiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWNhMjg4ZDVlM2UxNmYxODdlZjNlM2JhIn0.rUwOMuQpsmpF4bsgdfLVfggZ84qQTXfvCBJRjVsbBfI",
            "expires_at": "2019-04-08T21:55:33+00:00",
            "_links": {
  },
            "Accept": "application/vnd.artsy-v2+json"
        }
        this.$http.get(baseURI, headers)
        .then((result) => {
          this.artist = result.data
        })
      }
  }
}
</script>

