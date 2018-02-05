var SETTINGS = {
    appId : 'amzn1.ask.skill.93bb94b4-5516-4a13-b9f3-210dc4df2223',
    dynamoDBTableName : 'RTERadioPlayerSessionData',
    debug:true,

    channelIds:['1', '9', '16', '17', '18', '20', '22', '23', '24'],
    feedsHost: 'feeds.rasset.ie',
    livePlaylistPath: '/livelistings/playlist/?platform=iphone&channelid=',
    playlistPath: '/rteavgen/getplaylist/?format=json&id=',
    streamRoot: 'https://cdn.rasset.ie/hls-vod',
    
    solrSettings: {
    	host: 'feeds.rasset.ie',
    	path: '/sitesearch/clipperlive/select/?',
    	requestData: {
    		sort: 'published desc,isshow desc', // ADD later for sections when released - section_ordering asc
    		fl: 'programme_title,published,showid,itemid,isshow,title,description,duration,teaserimgref,channelid,channel_name,url_stem',
    		rows: 10,
    		fq: {media_medium:'audio',channelid:9},
    		wt: 'json'
    	}
    },
    comscoreSettings: {
        host: 'b.scorecardresearch.com',
        path: "/b2?",
        useragent: 'Alexa/1.0 (Amazon; AWS; RTE Lambda)', // Just made this up to get it to be accepted by DAX
        paramDefaults: {
            c1: '2',
        	c2: '16951747',
        	ns_site: 'test',
        	rte_vs_pl: 'alexa',
        	rte_mt_sec: 'radio',
        	rte_vs_sn: 'radio1',
        	rte_mt_type: 'audio',
        	rte_vs_ct: 'radio',
        	rte_mt_title: 'No Title',
        	name: 'alexa.rteradio.noname'
        }
    }
};
const url = `https://feeds.rasset.ie/sitesearch/clipperlive/select?q=*:*&fq=channelid:9&fq=ispodcast%3ATrue&sort=published+desc&wt=json&indent=true&rows=12&json.wrf=irishRadioApp&callback=irishRadioApp&_=1517501100603`;

// Make a request for a user with a given ID
axios.get(url)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });