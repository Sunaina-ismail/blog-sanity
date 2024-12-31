export interface skinCardType{
    title:string,
    image:{
        asset:{
            _ref:string;
            _type:string;
        };
    };
    date:string;
    category:{title:string};
    publishedAt:string;
    slug:{
        current :string;
    };
    author:{authorName:string};
}



export interface skinCardDetailType{
    title:string,
    image:{
        asset:{
            _ref:string;
            _type:string;
        };
    };
    category:{title:string};
    publishedAt:string;
    slug:{
        current :string;
    };
    date:string;
    author:{authorName:string};
    longPost: string | undefined;
}