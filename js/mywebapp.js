var growler = new Vue({ 
    el: '#growler',
        data: {
            appName: 'Growler',
            isOnline: true,
            query: '',
            isPowerSyntaxEnabled:false,
            searchIndexes:[],
            result:0
            }
});