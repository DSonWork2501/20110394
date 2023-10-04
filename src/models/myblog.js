const f = new Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
});

const today = new Date();

const blogdata = [
    {
        id: 0,
        title: "Vụ VĐV 'kêu đói': Đình chỉ 2 HLV liên quan ở đội tuyển bóng bàn trẻ",
        body: "Vụ việc các VĐV trẻ ở đội tuyển bóng bàn Việt Nam không được đảm bảo chế độ ăn đủ dinh dưỡng đã được xử lý bước đầu. Theo đó, ngay sau khi có thông tin phản ánh về công tác quản lý, phục vụ đội tuyển bóng bàn trẻ quốc gia đang tập huấn tại Khu Liên hợp thể thao quốc gia Mỹ Đình, Hà Nội, Cục Thể dục thể thao đã làm việc với các bộ phận liên quan, xác minh sự việc.",
        createAt: f.format(today),
        updateAt: f.format(today),
    },
    {
        id: 1,
        title: "CLB Hà Nội vỡ trận, thua 0-6 trước đương kim vô địch AFC Champions League",
        body: "HELLO THIS IS BLOG 2",
        createAt: f.format(today),
        updateAt: f.format(today),
    },
    {
        id: 2,
        title: "Cầu mây thành cứu tinh cho thể thao Việt Nam tại Asiad 19",
        body: "HELLO THIS IS BLOG 3",
        createAt: f.format(today),
        updateAt: f.format(today),
    },
    {
        id: 3,
        title: "Người Việt ở Bangkok kể lại thời khắc xảy ra vụ xả súng ở Siam Paragon",
        body: "HELLO THIS IS BLOG 4",
        createAt: f.format(today),
        updateAt: f.format(today),
    },
    {
        id: 4,
        title: "Úc: Kỳ lạ đàn cá mập sống trong hồ nước ở sân golf suốt 20 năm",
        body: "HELLO THIS IS BLOG 5",
        createAt: f.format(today),
        updateAt: f.format(today),
    },
    {
        id: 5,
        title: "Lũ kinh hoàng quét qua một bang của Ấn Độ, ít nhất 23 binh lính mất tích",
        body: "HELLO THIS IS BLOG 6",
        createAt: f.format(today),
        updateAt: f.format(today),
    },
    {
        id: 6,
        title: "Nobel Vật lý 2023 vinh danh 3 nhà vật lý lượng tử",
        body: "HELLO THIS IS BLOG 7",
        createAt: f.format(today),
        updateAt: f.format(today),
    },
    {
        id: 7,
        title: "Đặt chân đến vùng biển nơi 2 đại dương giao nhau mà hoàn toàn tách biệt",
        body: "HELLO THIS IS BLOG 8",
        createAt: f.format(today),
        updateAt: f.format(today),
    },

];

module.exports = {
    blogdata
};