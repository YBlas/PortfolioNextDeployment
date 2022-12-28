"use strict";
exports.id = 952;
exports.ids = [952];
exports.modules = {

/***/ 952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jb": () => (/* binding */ useGetPhotosQuery)
/* harmony export */ });
/* unused harmony exports GetPhotosDocument, useGetPhotosLazyQuery */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const defaultOptions = {};
const GetPhotosDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetPhotos($name: String, $internalId: String) {
  getPhotos(name: $name, internalId: $internalId) {
    _id
    url
    name
    internalId
    date
  }
}
    `;
/**
 * __useGetPhotosQuery__
 *
 * To run a query within a React component, call `useGetPhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhotosQuery({
 *   variables: {
 *      name: // value for 'name'
 *      internalId: // value for 'internalId'
 *   },
 * });
 */ function useGetPhotosQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(GetPhotosDocument, options);
}
function useGetPhotosLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GetPhotosDocument, options);
}


/***/ })

};
;