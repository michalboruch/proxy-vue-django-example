<template>
  <button @click="fetchFoo">GET foo!</button>
  <p><b>FOO is: </b>{{ foo.foo }}</p>
</template>

<script>
export default {
  name: 'Foo',
  props: {},
  data() {
    return {
      foo: '-'
    }
  },
  methods: {
    fetchFoo() {
      return fetch('http://localhost/api/foo/', {
        method: 'get',
        headers: {
        'content-type': 'application/json'
        }
      })
      .then(res => {
        // a non-200 response code
        if (!res.ok) {
          // create error instance with HTTP status text
          const error = new Error(res.statusText);
          error.json = res.json();
          throw error;
        }
        return res.json();
      })
      .then(json => {
        this.foo = json;
      })
      .catch(err => {
        console.log('err: ', err);
      });
    }
  }
}
</script>
