import { baseApi } from "../baseApi/baseApi";



const postApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createPost: builder.mutation({
            query: (data) => {
                return {
                    url: "/post/create",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["posts"],
        }),
        updatePost: builder.mutation({
            query: ({ id, data }) => {
                console.log({id, data})
                return {
                    url: `/post/update-post/${id}`,
                    method: "PATCH",
                    body: data,
                };
            },
            invalidatesTags: ["posts"],
        }),
        deletePost: builder.mutation({
            query: (postId) => {
                return {
                    url: `/post/delete/${postId._id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["posts"],
        }),
        getSinglePost: builder.query({
            query: (id) => ({
                url: `/post/${id}`,
                method: "GET",
            }),
            providesTags: ["posts"],
        }),
        getCategoryPost: builder.query({
            query: ({ id }) => {
                return {
                    url: `/post/${id}`,
                    method: "GET"
                };
            },
            providesTags: ["posts"],
        }),
        getMyPost: builder.query({
            query: () => ({
                url: "/post/my-post",
                method: "GET",
            }),
            providesTags: ["posts"],
        }),
        getAllPosts: builder.query({
            query: () => ({
                url: "/post",
                method: "GET",
            }),
            providesTags: ["posts"],
        }),
        createComment: builder.mutation({
            query: (body) => {
                // console.log(commentText)
                return {
                    url: `/post/comments/${body.postId}`,
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: ["posts"],
        }),
        updateComment: builder.mutation({
            query: ({ postId, commentId, commentText }) => {
                return {
                    url: `/post/update-comments/${postId}`,
                    method: "PATCH",
                    body: { commentText, commentId },
                };
            },
            invalidatesTags: ["posts"],
        }),
        upvotePost: builder.mutation({
            query: ({ postId }) => {
              
                return {
                    url: `/post/vote/${postId}`,
                    method: "PATCH",
                };
            },
            invalidatesTags: ["posts"],
        }),
        deleteComment: builder.mutation({
            query: (body) => {
                return {
                    url: `/post/comment-delete/${body.postId}`,
                    method: "DELETE",
                    body,
                };
            },
            invalidatesTags: ["posts"],
        }),
        payment: builder.mutation({
            query: ({ userId }) => {
                return {
                    url: `/post/payment/${userId}`,
                    method: "POST",
                };
            },
            invalidatesTags: ["posts"],
        }),
        
    }),
});

export const { 
    useCreateCommentMutation,
    useCreatePostMutation,
    useGetAllPostsQuery,
    useGetMyPostQuery,
    useUpdatePostMutation,
    useUpdateCommentMutation,
    useDeleteCommentMutation,
    useGetSinglePostQuery,
    useUpvotePostMutation,
    useGetCategoryPostQuery,
    usePaymentMutation,
    useDeletePostMutation
    
} = postApi;