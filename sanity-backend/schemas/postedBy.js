export default {
    name: 'postedBy',
    title: 'Posted By',
    type: 'reference',  // connect 2 diff documents
    to: [{type: 'user'}]
}