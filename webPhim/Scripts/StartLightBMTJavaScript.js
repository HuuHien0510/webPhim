// script.js

const showtimesData = {
    "Venom": {
        "24/10/2024": ["19:10", "21:00", "23:30"],
        "25/10/2024": ["18:00", "20:30", "22:30"]
    },
    "Cô Dâu Hào Môn": {
        "24/10/2024": ["11:40", "15:05", "19:00"],
        "25/10/2024": ["10:30", "14:00", "16:30"]
    }
};

// Hàm để cập nhật giờ chiếu phim
function updateShowtimes(movieTitle, date) {
    const movie = showtimesData[movieTitle];
    const times = movie[date] || [];
    const showtimesDiv = document.querySelector('.movie-info .showtimes');

    // Xóa các nút giờ chiếu hiện tại
    showtimesDiv.innerHTML = '';

    // Thêm giờ chiếu mới
    times.forEach(time => {
        const button = document.createElement('button');
        button.textContent = time;
        showtimesDiv.appendChild(button);
    });
}

// Gọi hàm này khi người dùng chọn ngày
updateShowtimes("Venom", "24/10/2024");