import axiosInstance from "../config/axiosConfig";

/////// get all articles //////////////

export const getAllArticles = async () => {
    try {
        const response = await axiosInstance.get("/articles");
        return response.data.articles;
    } catch (error) {
        throw new Error(error);
    }
};

////////////// get article by id ////////////////

export const getArticle = async (articleId) => {
    try {
        const response = await axiosInstance.get(`/articles/${articleId}`);
        return response.data.article;
    } catch (error) {
        throw new Error(error);
    }
};
