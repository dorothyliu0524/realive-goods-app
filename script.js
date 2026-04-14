const goods = [
  {
    id: 1,
    series: "REALIVE",
    name: "官方场刊 Pamphlet",
    price: 3000,
    image: "images/realive_pamphlet.jpg",
    description: "官方印刷场刊，适合收藏和看图文内容。",
    options: ["标准版"]
  },
  {
    id: 2,
    series: "REALIVE",
    name: "T恤 A",
    price: 3800,
    image: "images/realive_tshirt_a.jpg",
    description: "REALIVE 基础款 T恤 A。尺码 S / M / L。",
    options: ["S", "M", "L"]
  },
  {
    id: 3,
    series: "REALIVE",
    name: "T恤 B",
    price: 3800,
    image: "images/realive_tshirt_b.jpg",
    description: "REALIVE 基础款 T恤 B。尺码 S / M / L。",
    options: ["S", "M", "L"]
  },
  {
    id: 4,
    series: "REALIVE",
    name: "拉链连帽外套 Zip Hoodie",
    price: 7500,
    image: "images/realive_zip_hoodie.jpg",
    description: "连帽拉链外套，正反面都有设计。尺码 S / M / L。",
    options: ["S", "M", "L"]
  },
  {
    id: 5,
    series: "REALIVE",
    name: "面巾 Face Towel",
    price: 2500,
    image: "images/realive_face_towel.jpg",
    description: "长条面巾，适合现场应援或日常收藏。",
    options: ["标准款"]
  },
  {
    id: 6,
    series: "REALIVE",
    name: "手巾 Hand Towel",
    price: 1500,
    image: "images/realive_hand_towel.jpg",
    description: "小方巾款式，正面为 REALIVE 图案。",
    options: ["标准款"]
  },
  {
    id: 7,
    series: "REALIVE",
    name: "托特包 Tote Bag",
    price: 2500,
    image: "images/realive_tote_bag.jpg",
    description: "黑色托特包，适合装周边与日常外出。",
    options: ["黑色"]
  },
  {
    id: 8,
    series: "REALIVE",
    name: "迷你包 Mini Bag",
    price: 1500,
    image: "images/realive_mini_bag.jpg",
    description: "浅色迷你包，适合装小物。",
    options: ["浅灰色"]
  },
  {
    id: 9,
    series: "REALIVE",
    name: "圆珠笔",
    price: 800,
    image: "images/realive_pen_black.jpg",
    description: "圆珠笔有两个颜色，每个颜色都可以分别填写购买数量。",
    variants: [
      { key: "black", label: "黑色", image: "images/realive_pen_black.jpg" },
      { key: "white", label: "白色", image: "images/realive_pen_white.jpg" }
    ]
  },
  {
    id: 10,
    series: "REALIVE",
    name: "亚克力钥匙扣",
    price: 1500,
    image: "images/realive_keychain_black.jpg",
    description: "钥匙扣有两个颜色，每个颜色都可以分别填写购买数量。",
    variants: [
      { key: "clear_black", label: "透明黑", image: "images/realive_keychain_black.jpg" },
      { key: "clear_blue", label: "透明蓝", image: "images/realive_keychain_blue.jpg" }
    ]
  },
  {
    id: 11,
    series: "REALIVE",
    name: "贴纸套装",
    price: 800,
    image: "images/realive_sticker_set.jpg",
    description: "多张贴纸组成的一套，可贴手机壳或手账。",
    options: ["6枚入"]
  },
  {
    id: 12,
    series: "REALIVE",
    name: "旗子 Flag",
    price: 800,
    image: "images/realive_flag.jpg",
    description: "现场应援小旗。",
    options: ["标准款"]
  },
  {
    id: 13,
    series: "REALIVE",
    name: "文件夹 3枚组",
    price: 1500,
    image: "images/realive_clear_file_set.jpg",
    description: "三张一组的透明文件夹，含人物视觉图。",
    options: ["3枚组"]
  },
  {
    id: 14,
    series: "REALIVE",
    name: "REALIVE T恤",
    price: 4500,
    image: "images/realive_tshirt_visual.jpg",
    description: "印有视觉图的主题 T恤。尺码 S / M / L。",
    options: ["S", "M", "L"]
  },
  {
    id: 15,
    series: "PREQUEL",
    name: "AFTER PAMPHLET",
    price: 4200,
    image: "images/prequel_after_pamphlet.jpg",
    description: "Prequel: Before the WHITE 相关场刊。",
    options: ["标准版"]
  },
  {
    id: 16,
    series: "PREQUEL",
    name: "Prequel T恤",
    price: 4500,
    image: "images/prequel_tshirt.jpg",
    description: "Prequel 主题 T恤。尺码 S / M / L。",
    options: ["S", "M", "L"]
  },
  {
    id: 17,
    series: "PREQUEL",
    name: "kaku 钥匙扣",
    price: 2000,
    image: "images/prequel_kaku_keyholder.jpg",
    description: "立体感较强的造型钥匙扣，偏纪念款。",
    options: ["标准款"]
  },
  {
    id: 18,
    series: "PREQUEL",
    name: "收纳包 Pouch",
    price: 2200,
    image: "images/prequel_pouch_cyan_magenta_yellow.jpg",
    description: "收纳包有三个颜色，每个颜色都可以分别填写购买数量。",
    variants: [
      { key: "cyan", label: "Cyan", image: "images/prequel_pouch_cyan_magenta_yellow.jpg" },
      { key: "magenta", label: "Magenta", image: "images/prequel_pouch_cyan_magenta_yellow.jpg" },
      { key: "yellow", label: "Yellow", image: "images/prequel_pouch_cyan_magenta_yellow.jpg" }
    ]
  },
  {
    id: 19,
    series: "PREQUEL",
    name: "亚克力立牌",
    price: 1500,
    image: "images/prequel_acrylic_stand_abc.jpg",
    description: "人物视觉立牌，共 A / B / C 三款，每款都可以分别填写购买数量。",
    variants: [
      { key: "stand_a", label: "A", image: "images/prequel_acrylic_stand_abc.jpg" },
      { key: "stand_b", label: "B", image: "images/prequel_acrylic_stand_abc.jpg" },
      { key: "stand_c", label: "C", image: "images/prequel_acrylic_stand_abc.jpg" }
    ]
  },
  {
    id: 20,
    series: "PREQUEL",
    name: "旗子 Flag",
    price: 800,
    image: "images/prequel_flag.jpg",
    description: "Prequel 主题小旗。",
    options: ["标准款"]
  },
  {
    id: 21,
    series: "PREQUEL",
    name: "文件夹 3枚组",
    price: 1500,
    image: "images/prequel_clear_file_set.jpg",
    description: "Prequel 视觉透明文件夹三张套装。",
    options: ["3枚组"]
  },
  {
    id: 22,
    series: "PREQUEL",
    name: "玻璃磁铁",
    price: 1500,
    image: "images/prequel_glass_magnets.jpg",
    description: "三枚一组玻璃磁铁。",
    options: ["3个组"]
  }
];

const state = {};

goods.forEach(item => {
  if (item.variants) {
    state[item.id] = {
      variantQty: {}
    };

    item.variants.forEach(variant => {
      state[item.id].variantQty[variant.key] = 0;
    });
  } else {
    state[item.id] = {
      option: item.options[0],
      qty: 0
    };
  }
});

const goodsGrid = document.getElementById("goodsGrid");
const selectedItemsEl = document.getElementById("selectedItems");
const totalQtyEl = document.getElementById("totalQty");
const grandTotalEl = document.getElementById("grandTotal");
const searchInput = document.getElementById("searchInput");
const seriesFilter = document.getElementById("seriesFilter");
const sortFilter = document.getElementById("sortFilter");

function formatYen(num) {
  return `¥${num.toLocaleString("ja-JP")}`;
}

function getFilteredGoods() {
  let filtered = [...goods];

  const keyword = searchInput.value.trim().toLowerCase();
  const series = seriesFilter.value;
  const sort = sortFilter.value;

  if (keyword) {
    filtered = filtered.filter(item => {
      const textParts = [
        item.name,
        item.description,
        item.series
      ];

      if (item.options) {
        textParts.push(item.options.join(" "));
      }

      if (item.variants) {
        textParts.push(item.variants.map(v => v.label).join(" "));
      }

      return textParts.join(" ").toLowerCase().includes(keyword);
    });
  }

  if (series !== "all") {
    filtered = filtered.filter(item => item.series === series);
  }

  if (sort === "priceAsc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceDesc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "nameAsc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
  }

  return filtered;
}

function getItemQty(item) {
  if (item.variants) {
    return item.variants.reduce((sum, variant) => {
      return sum + (Number(state[item.id].variantQty[variant.key]) || 0);
    }, 0);
  }

  return Number(state[item.id].qty) || 0;
}

function getItemLineTotal(item) {
  return getItemQty(item) * item.price;
}

function renderVariantRows(item) {
  return `
    <div class="variants-block">
      ${item.variants.map(variant => `
        <div class="variant-row">
          <div>
            <div class="variant-name">${variant.label}</div>
            <div class="variant-hint">单价：${formatYen(item.price)}</div>
          </div>
          <div class="field">
            <label>买几个</label>
            <input
              type="number"
              min="0"
              max="5"
              value="${state[item.id].variantQty[variant.key]}"
              onchange="updateVariantQty(${item.id}, '${variant.key}', this.value)"
            />
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSingleOptionControls(item) {
  const selected = state[item.id];

  return `
    <div class="row">
      <div class="field">
        <label>颜色 / 尺码 / 版本</label>
        <select onchange="updateOption(${item.id}, this.value)">
          ${item.options.map(opt => `
            <option value="${opt}" ${selected.option === opt ? "selected" : ""}>${opt}</option>
          `).join("")}
        </select>
      </div>

      <div class="field">
        <label>买几个</label>
        <input
          type="number"
          min="0"
          max="5"
          value="${selected.qty}"
          onchange="updateQty(${item.id}, this.value)"
        />
      </div>
    </div>
  `;
}

function renderGoods() {
  const filteredGoods = getFilteredGoods();

  goodsGrid.innerHTML = filteredGoods.map(item => {
    const lineTotal = getItemLineTotal(item);

    return `
      <article class="card">
        <span class="badge">${item.series}</span>

        <div class="card-image-wrap">
          <img src="${item.image}" alt="${item.name}" class="card-image" />
        </div>

        <h2>${item.name}</h2>
        <div class="price">${formatYen(item.price)}</div>
        <div class="desc">${item.description}</div>

        ${item.variants ? renderVariantRows(item) : renderSingleOptionControls(item)}

        <div class="line-total">小计：${formatYen(lineTotal)}</div>
      </article>
    `;
  }).join("");

  updateSummary();
}

function updateSummary() {
  let selectedItems = 0;
  let totalQty = 0;
  let grandTotal = 0;

  goods.forEach(item => {
    const itemQty = getItemQty(item);
    const itemTotal = getItemLineTotal(item);

    if (itemQty > 0) {
      selectedItems += 1;
    }

    totalQty += itemQty;
    grandTotal += itemTotal;
  });

  selectedItemsEl.textContent = selectedItems;
  totalQtyEl.textContent = totalQty;
  grandTotalEl.textContent = formatYen(grandTotal);
}

function updateOption(id, value) {
  state[id].option = value;
}

function normalizeQty(value) {
  let qty = Number(value);

  if (Number.isNaN(qty) || qty < 0) {
    qty = 0;
  }

  if (qty > 5) {
    qty = 5;
    alert("每个颜色 / 版本最多购买 5 个。");
  }

  return qty;
}

function updateQty(id, value) {
  state[id].qty = normalizeQty(value);
  renderGoods();
}

function updateVariantQty(id, variantKey, value) {
  state[id].variantQty[variantKey] = normalizeQty(value);
  renderGoods();
}

searchInput.addEventListener("input", renderGoods);
seriesFilter.addEventListener("change", renderGoods);
sortFilter.addEventListener("change", renderGoods);

renderGoods();