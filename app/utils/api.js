"use strict";

import axios from 'axios';

export default {
  fetchPopularRepos(language) {
    var encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language: ${language}&sort=stars&order=desc&type=Repositories`);
  }

  return axios.get(encodedURI)
    .then(function(res){
      return res.data.items;
    })
    .catch(function(err){
      return err;
    });
}
