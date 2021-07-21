const socket = (io) => {
  io.on("connection", (socket) => {
    socket.on("send", (c) => {
      console.log("esnd!!",socket.id)
    })
    //#region 방장위임
    // socket.on("chatPassHost", (c: any) => {
    //   //taker_id: 방장 받는사람 고유번호
    //   l.info(
    //     "cPassHost " +
    //       c.room_id +
    //       " " +
    //       c.taker_id +
    //       " " +
    //       socket.id +
    //       " " +
    //       c.host_id
    //   );
    //   if (!c.room_id || !c.taker_id || !socket.id || !c.host_id) return;
    //   else sql_host_set(db_conn, c.room_id, c.taker_id, c.host_id);
    // });
    //#endregion
  });
};

module.exports = socket