var number = function(busStops){
    let res = 0

    for (let i = 0; i < busStops.length; i++) {
        res += busStops[i][0] - busStops[i][1]
    }
    return res
}