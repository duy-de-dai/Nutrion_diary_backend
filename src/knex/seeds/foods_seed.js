exports.seed = (knex) => {
    // Xóa tất cả các dòng dữ liệu hiện tại
    return knex('foods').del()
      .then(() => {
        // Thêm các dòng dữ liệu mẫu
        return knex('foods').insert([
          {
            name: 'Thịt Gà',
            type: 'Thịt',
            description: 'Nguồn protein giàu dinh dưỡng',
            imageUrl: 'https://example.com/ga.jpg',
            calories: 165.5,
            protein: 31.2,
            fat: 3.6,
            carb: 0,
            vitamin: JSON.stringify(['Vitamin A', 'Vitamin C']),
          },
          {
            name: 'Rau Bó Xôi',
            type: 'Rau Củ',
            description: 'Rau xanh giàu chất dinh dưỡng',
            imageUrl: 'https://example.com/rau.jpg',
            calories: 55.8,
            protein: 3.2,
            fat: 0.4,
            carb: 12.5,
            vitamin: JSON.stringify(['Vitamin C', 'Vitamin K']),
          },
          // Thêm các dòng dữ liệu khác tương tự
        ]);
      });
  };
  