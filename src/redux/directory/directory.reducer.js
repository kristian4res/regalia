const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://images.unsplash.com/photo-1552060155-4eac706a5515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        },
        {
          title: 'all',
          imageUrl: 'https://images.unsplash.com/photo-1525025500848-f00b7d362dec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          size: 'extra-large',
          id: 6,
          linkUrl: 'shop'
        }
    ]
};

const directoryReducer = (currentState=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return currentState;
    }
};

export default directoryReducer;