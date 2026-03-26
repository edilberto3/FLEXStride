// ═══════════ DATA ═══════════
const PRODUCTS = [
	{
		id: 1,
		name: "Nike LeBron 20",
		brand: "Nike",
		category: "Basketball",
		price: 11999,
		image: "NikeLebron.png",
		badge: "Hot",
		badgeClass: "hot",
		description:
			"Designed for speed and power on the court. Excellent cushioning, grip, and ankle support for elite basketball players. LeBron's signature shoe engineered for the modern game.",
		featured: true,
		stock: 24,
	},
	{
		id: 2,
		name: "Adidas Tour360 22",
		brand: "Adidas",
		category: "Golf",
		price: 9999,
		image: "AdidasTour.png",
		badge: "New",
		badgeClass: "new",
		description:
			"Provides stability and traction on the course, helping golfers maintain balance and improve swing performance. Waterproof leather upper with 360° support wrap.",
		featured: true,
		stock: 18,
	},
	{
		id: 3,
		name: "ASICS Gel-Renma",
		brand: "ASICS",
		category: "Pickleball",
		price: 6999,
		image: "Asics.png",
		badge: null,
		badgeClass: "",
		description:
			"Built for quick lateral movements, it offers durability and comfort for fast-paced pickleball games. GEL technology cushioning for all-day court performance.",
		featured: true,
		stock: 32,
	},
	{
		id: 4,
		name: "Nike Air Zoom Pegasus 40",
		brand: "Nike",
		category: "Running",
		price: 6899,
		image: "NikeAir.png",
		badge: "Bestseller",
		badgeClass: "new",
		description:
			"Lightweight and breathable, perfect for daily runs with responsive cushioning and comfort. React foam midsole delivers a smooth, springy ride mile after mile.",
		featured: true,
		stock: 40,
	},
	{
		id: 5,
		name: "Puma RS-X",
		brand: "Puma",
		category: "Lifestyle",
		price: 4999,
		image: "Puma.png",
		badge: null,
		badgeClass: "",
		description:
			"Stylish and comfortable for everyday wear, combining sporty design with modern street fashion. Retro running silhouette with premium materials and bold colour-blocking.",
		featured: false,
		stock: 55,
	},
];

const REVIEWS_DATA = [
	{
		name: "Marco D.",
		product: "Nike LeBron 20",
		rating: 5,
		text: "Absolutely game-changing on the court. The ankle support is incredible and the cushioning absorbs every landing perfectly.",
	},
	{
		name: "Aiko R.",
		product: "Nike Air Zoom Pegasus 40",
		rating: 5,
		text: "Best running shoe I've ever owned. Completed my first 10K in these and my feet felt great the entire time.",
	},
	{
		name: "Kevin L.",
		product: "Adidas Tour360 22",
		rating: 5,
		text: "My short game improved immediately. The stability through the swing is unlike any golf shoe I've tried.",
	},
	{
		name: "Gina M.",
		product: "Puma RS-X",
		rating: 4,
		text: "Super comfortable and turns heads everywhere I go. The colourways are bold but it just works.",
	},
	{
		name: "Theo B.",
		product: "ASICS Gel-Renma",
		rating: 5,
		text: "Best pickleball shoe for fast courts. The lateral support is exceptional for quick directional changes.",
	},
	{
		name: "Sara C.",
		product: "Nike LeBron 20",
		rating: 4,
		text: "Premium quality and it shows. These feel like they were made specifically for my game.",
	},
];

const ORDERS_DATA = [
	{
		id: "FS-2025-001",
		customer: "Marco Dela Cruz",
		items: "Nike LeBron 20 x1",
		total: "₱11,999",
		status: "Delivered",
		date: "Mar 18, 2025",
	},
	{
		id: "FS-2025-002",
		customer: "Aiko Reyes",
		items: "Air Zoom Pegasus 40 x1",
		total: "₱6,899",
		status: "Shipped",
		date: "Mar 20, 2025",
	},
	{
		id: "FS-2025-003",
		customer: "Kevin Lim",
		items: "Adidas Tour360 22 x1",
		total: "₱9,999",
		status: "Processing",
		date: "Mar 23, 2025",
	},
	{
		id: "FS-2025-004",
		customer: "Gina Morales",
		items: "Puma RS-X x2",
		total: "₱9,998",
		status: "Delivered",
		date: "Mar 16, 2025",
	},
	{
		id: "FS-2025-005",
		customer: "Theo Bautista",
		items: "ASICS Gel-Renma x1",
		total: "₱6,999",
		status: "Shipped",
		date: "Mar 21, 2025",
	},
	{
		id: "FS-2025-006",
		customer: "Sara Cruz",
		items: "Nike LeBron 20 x1, Pegasus 40 x1",
		total: "₱18,898",
		status: "Processing",
		date: "Mar 24, 2025",
	},
];

const SUPPLIERS_DATA = [
	{
		name: "Nike Philippines",
		materials: "LeBron 20, Pegasus 40",
		location: "Pasig, PH",
		cert: "ISO 9001",
		leadDays: 7,
		status: "Active",
	},
	{
		name: "Adidas SEA",
		materials: "Tour360 22",
		location: "Singapore / PH",
		cert: "GOTS",
		leadDays: 10,
		status: "Active",
	},
	{
		name: "ASICS Philippines",
		materials: "Gel-Renma",
		location: "Manila, PH",
		cert: "OEKO-TEX®",
		leadDays: 8,
		status: "Active",
	},
	{
		name: "Puma SEA",
		materials: "RS-X",
		location: "Bangkok / PH",
		cert: "SGS Verified",
		leadDays: 12,
		status: "Active",
	},
];

const USERS_DATA = [
	{
		name: "Marco Dela Cruz",
		email: "marco@email.com",
		role: "Customer",
		orders: 2,
		joined: "Jan 2025",
		status: "Active",
	},
	{
		name: "Aiko Reyes",
		email: "aiko@email.com",
		role: "Customer",
		orders: 1,
		joined: "Feb 2025",
		status: "Active",
	},
	{
		name: "Kevin Lim",
		email: "kevin@email.com",
		role: "Customer",
		orders: 3,
		joined: "Jan 2025",
		status: "Active",
	},
	{
		name: "Admin FLEXStride",
		email: "admin@flex.ph",
		role: "Admin",
		orders: 0,
		joined: "Jan 2025",
		status: "Active",
	},
];

const ACCOUNTS = [
	{
		email: "admin@flex.ph",
		password: "admin123",
		role: "admin",
		name: "Admin FLEXStride",
	},
	{
		email: "user@flex.ph",
		password: "user123",
		role: "user",
		name: "Marco Dela Cruz",
	},
];

// Hero shoes rotation
const HERO_SHOES = [
	{
		src: "NikeLebron.png",
		brand: "NIKE",
		name: "LeBron 20",
		price: "₱11,999",
		id: 1,
	},
	{
		src: "AdidasTour.png",
		brand: "ADIDAS",
		name: "Tour360 22",
		price: "₱9,999",
		id: 2,
	},
	{
		src: "Asics.png",
		brand: "ASICS",
		name: "Gel-Renma",
		price: "₱6,999",
		id: 3,
	},
	{
		src: "NikeAir.png",
		brand: "NIKE",
		name: "Air Zoom Pegasus",
		price: "₱6,899",
		id: 4,
	},
	{
		src: "Puma.png",
		brand: "PUMA",
		name: "RS-X",
		price: "₱4,999",
		id: 5,
	},
];

// ═══════════ STATE ═══════════
let cart = JSON.parse(localStorage.getItem("fs_cart") || "[]");
let currentFilter = "All";
let currentRating = 0;
let reviews = [...REVIEWS_DATA];
let currentUser = JSON.parse(localStorage.getItem("fs_user") || "null");
let detailQty = 1;
let currentDetailProduct = null;
let registeredUsers = JSON.parse(localStorage.getItem("fs_users") || "[]");
let heroIndex = 0;
let heroInterval = null;

// ═══════════ INIT ═══════════
document.addEventListener("DOMContentLoaded", () => {
	renderFeatured();
	renderProductsPage();
	renderReviews();
	updateCartCount();
	updateAccountMenu();
	updateCheckoutSummary();
	startHeroRotation();
});

// ═══════════ HERO ROTATION ═══════════
function setHeroShoe(idx) {
	heroIndex = idx;
	const shoe = HERO_SHOES[idx];
	const img = document.getElementById("heroShoeImg");
	const label = document.getElementById("heroShoeLabel");
	if (img) {
		img.style.opacity = "0";
		img.style.transform = "scale(0.95)";
		setTimeout(() => {
			img.src = shoe.src;
			img.alt = shoe.name;
			img.style.opacity = "1";
			img.style.transform = "scale(1)";
		}, 200);
	}
	if (label) {
		label.querySelector(".hsl-brand").textContent = shoe.brand;
		label.querySelector(".hsl-name").textContent = shoe.name;
		label.querySelector(".hsl-price").textContent = shoe.price;
	}
	document
		.querySelectorAll(".hdot")
		.forEach((d, i) => d.classList.toggle("active", i === idx));
}
function startHeroRotation() {
	heroInterval = setInterval(() => {
		heroIndex = (heroIndex + 1) % HERO_SHOES.length;
		setHeroShoe(heroIndex);
	}, 3500);
}

// ═══════════ PAGE NAV ═══════════
function showPage(page) {
	document
		.querySelectorAll(".page")
		.forEach((p) => p.classList.remove("active"));
	const el = document.getElementById("page-" + page);
	if (el) el.classList.add("active");
	window.scrollTo({ top: 0, behavior: "smooth" });
	document.querySelectorAll(".nav-links a").forEach((a) => {
		a.classList.toggle("active", a.dataset.page === page);
	});
	if (page === "products") renderProductsPage();
	if (page === "admin") renderAdminOverview();
	if (page === "dashboard") renderDashboard();
	if (page === "checkout") updateCheckoutSummary();
	closeAccountMenu();
}

function filterAndShow(val) {
	currentFilter = val;
	showPage("products");
	renderProductsPage();
	document.querySelectorAll(".bfb-btn").forEach((b) => {
		b.classList.toggle("active", b.textContent.trim() === val);
	});
}

// ═══════════ PRODUCTS ═══════════
function renderFeatured() {
	const g = document.getElementById("featuredGrid");
	if (!g) return;
	g.innerHTML = PRODUCTS.filter((p) => p.featured)
		.map((p) => productCardHTML(p))
		.join("");
}

function renderProductsPage() {
	const g = document.getElementById("productsGrid");
	if (!g) return;
	let list =
		currentFilter === "All"
			? [...PRODUCTS]
			: PRODUCTS.filter(
					(p) => p.brand === currentFilter || p.category === currentFilter,
				);
	const sort = document.getElementById("sortSelect")?.value;
	if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
	else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
	else if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
	g.innerHTML = list.map((p) => productCardHTML(p)).join("");
}

function productCardHTML(p) {
	return `
    <div class="product-card" onclick="showProductDetail(${p.id})">
      <div class="product-card-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'"/>
        ${p.badge ? `<span class="product-badge ${p.badgeClass}">${p.badge}</span>` : ""}
      </div>
      <div class="product-card-body">
        <p class="product-brand">${p.brand}</p>
        <p class="product-category">${p.category}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-footer">
          <span class="product-price">&#8369;${p.price.toLocaleString()}</span>
          <button class="add-to-cart" onclick="event.stopPropagation();addToCart(${p.id})">+</button>
        </div>
      </div>
    </div>`;
}

function setFilter(val, btn) {
	currentFilter = val;
	document
		.querySelectorAll(".bfb-btn")
		.forEach((b) => b.classList.remove("active"));
	if (btn) btn.classList.add("active");
	renderProductsPage();
}

function applySort() {
	renderProductsPage();
}

function showProductDetail(id) {
	const p = PRODUCTS.find((x) => x.id === id);
	if (!p) return;
	currentDetailProduct = p;
	detailQty = 1;
	const c = document.getElementById("productDetailContent");
	c.innerHTML = `
    <div class="product-detail">
      <div class="pd-breadcrumb">
        <span onclick="showPage('products')">Shop</span>
        <span style="color:var(--muted-2)">/</span>
        <span style="color:var(--muted)">${p.brand}</span>
        <span style="color:var(--muted-2)">/</span>
        <span style="color:var(--white-2)">${p.name}</span>
      </div>
      <div class="pd-grid">
        <div class="pd-img"><img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'"/></div>
        <div class="pd-info">
          <p class="pd-brand">${p.brand} &mdash; ${p.category}</p>
          <h1 class="pd-name">${p.name}</h1>
          <p class="pd-price">&#8369;${p.price.toLocaleString()}</p>
          <p class="pd-desc">${p.description}</p>
          <div class="pd-actions">
            <div class="qty-control">
              <button class="qty-ctrl-btn" onclick="changeDetailQty(-1)">&#x2212;</button>
              <span class="qty-display" id="detailQty">1</span>
              <button class="qty-ctrl-btn" onclick="changeDetailQty(1)">+</button>
            </div>
            <button class="btn-primary" onclick="addToCartDetail()">Add to Bag</button>
          </div>
          <p style="font-family:var(--font-h);font-size:.72rem;font-weight:700;letter-spacing:.1em;color:${p.stock > 10 ? "#4caf7a" : p.stock > 0 ? "#c4841a" : "#e05555"}">
            ${p.stock > 10 ? "&#10003; In Stock" : p.stock > 0 ? "&#9888; Low Stock — " + p.stock + " left" : "&#x2715; Out of Stock"}
          </p>
        </div>
      </div>
    </div>`;
	showPage("product-detail");
}

function changeDetailQty(d) {
	detailQty = Math.max(1, detailQty + d);
	const el = document.getElementById("detailQty");
	if (el) el.textContent = detailQty;
}
function addToCartDetail() {
	if (!currentDetailProduct) return;
	for (let i = 0; i < detailQty; i++) addToCart(currentDetailProduct.id);
}

// ═══════════ CART ═══════════
function addToCart(id) {
	const p = PRODUCTS.find((x) => x.id === id);
	if (!p) return;
	const ex = cart.find((c) => c.id === id);
	if (ex) ex.qty++;
	else
		cart.push({
			id: p.id,
			name: p.name,
			price: p.price,
			image: p.image,
			qty: 1,
		});
	saveCart();
	showToast(`${p.name} added to bag!`);
}
function saveCart() {
	localStorage.setItem("fs_cart", JSON.stringify(cart));
	updateCartCount();
	renderCartItems();
	updateCheckoutSummary();
}
function updateCartCount() {
	const total = cart.reduce((s, c) => s + c.qty, 0);
	const el = document.getElementById("cartCount");
	if (el) el.textContent = total;
}
function toggleCart() {
	document.getElementById("cartSidebar").classList.toggle("open");
	document.getElementById("cartOverlay").classList.toggle("active");
	renderCartItems();
}
function renderCartItems() {
	const el = document.getElementById("cartItems");
	const tot = document.getElementById("cartTotal");
	if (!el) return;
	if (!cart.length) {
		el.innerHTML = `<div class="cart-empty"><p>Your bag is empty.</p></div>`;
		if (tot) tot.textContent = "₱0";
		return;
	}
	el.innerHTML = cart
		.map(
			(i) => `
    <div class="cart-item">
      <img src="${i.image}" alt="${i.name}" onerror="this.style.display='none'"/>
      <div class="cart-item-info">
        <p class="cart-item-name">${i.name}</p>
        <p class="cart-item-price">&#8369;${i.price.toLocaleString()}</p>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateCartQty(${i.id},-1)">&#x2212;</button>
          <span class="qty-num">${i.qty}</span>
          <button class="qty-btn" onclick="updateCartQty(${i.id},1)">+</button>
        </div>
        <p class="cart-remove" onclick="removeFromCart(${i.id})">Remove</p>
      </div>
    </div>`,
		)
		.join("");
	const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
	if (tot) tot.textContent = `₱${total.toLocaleString()}`;
}
function updateCartQty(id, d) {
	const item = cart.find((c) => c.id === id);
	if (!item) return;
	item.qty += d;
	if (item.qty <= 0) cart = cart.filter((c) => c.id !== id);
	saveCart();
}
function removeFromCart(id) {
	cart = cart.filter((c) => c.id !== id);
	saveCart();
}
function checkout() {
	document.getElementById("cartSidebar").classList.remove("open");
	document.getElementById("cartOverlay").classList.remove("active");
	showPage("checkout");
}
function updateCheckoutSummary() {
	const el = document.getElementById("checkoutItems");
	const sub = document.getElementById("coSubtotal");
	const tot = document.getElementById("coTotal");
	if (!el) return;
	el.innerHTML = cart
		.map(
			(i) => `
    <div class="checkout-item">
      <img src="${i.image}" alt="${i.name}" onerror="this.style.display='none'"/>
      <div class="checkout-item-info">
        <p class="ci-name">${i.name} x${i.qty}</p>
        <p class="ci-price">&#8369;${(i.price * i.qty).toLocaleString()}</p>
      </div>
    </div>`,
		)
		.join("");
	const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
	if (sub) sub.textContent = `₱${subtotal.toLocaleString()}`;
	if (tot) tot.textContent = `₱${(subtotal + 200).toLocaleString()}`;
}
function placeOrder() {
	if (!cart.length) {
		showToast("Your bag is empty!");
		return;
	}

	// Get checkout form fields
	const firstName = document.getElementById("co-first");
	const lastName = document.getElementById("co-last");
	const email = document.getElementById("co-email");
	const phone = document.getElementById("co-phone");
	const address = document.getElementById("co-address");
	const city = document.getElementById("co-city");
	const province = document.getElementById("co-province");

	// Clear previous error styles
	const allFields = [
		firstName,
		lastName,
		email,
		phone,
		address,
		city,
		province,
	];
	allFields.forEach((field) => {
		if (field) {
			field.classList.remove("error");
			const parent = field.closest(".form-group");
			if (parent) {
				const existingError = parent.querySelector(".error-message");
				if (existingError) existingError.remove();
			}
		}
	});

	// Validation
	let isValid = true;
	let errorMessage = "";

	if (!firstName || !firstName.value.trim()) {
		isValid = false;
		errorMessage = "First name is required";
		if (firstName) {
			firstName.classList.add("error");
			const parent = firstName.closest(".form-group");
			if (parent && !parent.querySelector(".error-message")) {
				const errorSpan = document.createElement("span");
				errorSpan.className = "error-message";
				errorSpan.textContent = "First name is required";
				parent.appendChild(errorSpan);
			}
		}
	} else if (!lastName || !lastName.value.trim()) {
		isValid = false;
		errorMessage = "Last name is required";
		if (lastName) {
			lastName.classList.add("error");
			const parent = lastName.closest(".form-group");
			if (parent && !parent.querySelector(".error-message")) {
				const errorSpan = document.createElement("span");
				errorSpan.className = "error-message";
				errorSpan.textContent = "Last name is required";
				parent.appendChild(errorSpan);
			}
		}
	} else if (!email || !email.value.trim()) {
		isValid = false;
		errorMessage = "Email address is required";
		if (email) {
			email.classList.add("error");
			const parent = email.closest(".form-group");
			if (parent && !parent.querySelector(".error-message")) {
				const errorSpan = document.createElement("span");
				errorSpan.className = "error-message";
				errorSpan.textContent = "Email address is required";
				parent.appendChild(errorSpan);
			}
		}
	} else if (!email.value.includes("@") || !email.value.includes(".")) {
		isValid = false;
		errorMessage = "Please enter a valid email address";
		if (email) {
			email.classList.add("error");
			const parent = email.closest(".form-group");
			if (parent && !parent.querySelector(".error-message")) {
				const errorSpan = document.createElement("span");
				errorSpan.className = "error-message";
				errorSpan.textContent =
					"Valid email address required (e.g., name@example.com)";
				parent.appendChild(errorSpan);
			}
		}
	} else if (!phone || !phone.value.trim()) {
		isValid = false;
		errorMessage = "Phone number is required";
		if (phone) {
			phone.classList.add("error");
			const parent = phone.closest(".form-group");
			if (parent && !parent.querySelector(".error-message")) {
				const errorSpan = document.createElement("span");
				errorSpan.className = "error-message";
				errorSpan.textContent = "Phone number is required";
				parent.appendChild(errorSpan);
			}
		}
	} else if (phone.value.trim().length < 10) {
		isValid = false;
		errorMessage = "Please enter a valid phone number";
		if (phone) {
			phone.classList.add("error");
			const parent = phone.closest(".form-group");
			if (parent && !parent.querySelector(".error-message")) {
				const errorSpan = document.createElement("span");
				errorSpan.className = "error-message";
				errorSpan.textContent = "Phone number must be at least 10 digits";
				parent.appendChild(errorSpan);
			}
		}
	} else if (!address || !address.value.trim()) {
		isValid = false;
		errorMessage = "Address is required";
		if (address) {
			address.classList.add("error");
			const parent = address.closest(".form-group");
			if (parent && !parent.querySelector(".error-message")) {
				const errorSpan = document.createElement("span");
				errorSpan.className = "error-message";
				errorSpan.textContent = "Street address is required";
				parent.appendChild(errorSpan);
			}
		}
	} else if (!city || !city.value.trim()) {
		isValid = false;
		errorMessage = "City is required";
		if (city) {
			city.classList.add("error");
			const parent = city.closest(".form-group");
			if (parent && !parent.querySelector(".error-message")) {
				const errorSpan = document.createElement("span");
				errorSpan.className = "error-message";
				errorSpan.textContent = "City is required";
				parent.appendChild(errorSpan);
			}
		}
	} else if (!province || !province.value.trim()) {
		isValid = false;
		errorMessage = "Province is required";
		if (province) {
			province.classList.add("error");
			const parent = province.closest(".form-group");
			if (parent && !parent.querySelector(".error-message")) {
				const errorSpan = document.createElement("span");
				errorSpan.className = "error-message";
				errorSpan.textContent = "Province is required";
				parent.appendChild(errorSpan);
			}
		}
	}

	if (!isValid) {
		showToast(`⚠ ${errorMessage}`);
		return;
	}

	// Generate order number
	const orderNumber =
		"FS-" +
		new Date().getFullYear() +
		"-" +
		String(Math.floor(Math.random() * 900) + 100);
	const today = new Date();
	const formattedDate = today.toLocaleDateString("en-PH", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});

	// Get payment method
	const selectedPay = document.querySelector('input[name="payment"]:checked');
	const paymentMethod = selectedPay
		? selectedPay.value === "gcash"
			? "GCash"
			: selectedPay.value === "cod"
				? "Cash on Delivery"
				: "Credit/Debit Card"
		: "GCash";

	// Build order items string
	const orderItems = cart.map((item) => `${item.name} x${item.qty}`).join(", ");
	const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
	const shipping = 200;
	const total = subtotal + shipping;

	// Get customer name
	const customerName = `${firstName.value.trim()} ${lastName.value.trim()}`;

	// Add order to global orders
	ORDERS_DATA.unshift({
		id: orderNumber,
		customer: customerName,
		items: orderItems,
		total: `₱${total.toLocaleString()}`,
		status: "Processing",
		date: formattedDate,
	});

	// Add to user's orders if logged in
	if (currentUser) {
		const userOrders = JSON.parse(
			localStorage.getItem("fs_user_orders") || "[]",
		);
		userOrders.unshift({
			id: orderNumber,
			date: formattedDate,
			items: orderItems,
			total: `₱${total.toLocaleString()}`,
			status: "Processing",
		});
		localStorage.setItem("fs_user_orders", JSON.stringify(userOrders));
	}

	// Clear cart
	cart = [];
	saveCart();

	// Close cart sidebar if open
	const cartSidebar = document.getElementById("cartSidebar");
	const cartOverlay = document.getElementById("cartOverlay");
	if (cartSidebar) cartSidebar.classList.remove("open");
	if (cartOverlay) cartOverlay.classList.remove("active");

	// Calculate estimated delivery date
	const etaDate = new Date();
	etaDate.setDate(etaDate.getDate() + 5);
	const formattedEta = etaDate.toLocaleDateString("en-PH", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});

	// Show success message with order details
	const successDiv = document.createElement("div");
	successDiv.className = "order-success-message";
	successDiv.innerHTML = `
		<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
			<polyline points="22 4 12 14.01 9 11.01" />
		</svg>
		<h3>Order Confirmed!</h3>
		<p>Thank you, ${customerName}!</p>
		<div class="order-id">${orderNumber}</div>
		<p style="font-size: 0.75rem; color: var(--muted);">
			📦 Est. Delivery: ${formattedEta}<br>
			💳 ${paymentMethod}
		</p>
		<button class="btn-primary" id="trackOrderBtn" style="font-size: 0.8rem; padding: 0.6rem 1.2rem;">Track Order →</button>
	`;
	document.body.appendChild(successDiv);

	// Track order button handler
	const trackBtn = document.getElementById("trackOrderBtn");
	if (trackBtn) {
		trackBtn.addEventListener("click", () => {
			successDiv.remove();
			showPage("tracking");
			setTimeout(() => {
				const input = document.getElementById("trackingInput");
				if (input) input.value = orderNumber;
				trackOrder();
			}, 100);
		});
	}

	// Auto remove success message after 8 seconds
	setTimeout(() => {
		if (successDiv && successDiv.parentNode) {
			successDiv.style.opacity = "0";
			setTimeout(() => successDiv.remove(), 300);
		}
	}, 8000);

	showToast(`🎉 Order ${orderNumber} placed! You can track it now.`);

	// Clear checkout form fields
	if (firstName) firstName.value = "";
	if (lastName) lastName.value = "";
	if (email) email.value = "";
	if (phone) phone.value = "";
	if (address) address.value = "";
	if (city) city.value = "";
	if (province) province.value = "";

	// Redirect to home after delay
	setTimeout(() => {
		showPage("home");
	}, 2000);
}

// ═══════════ SEARCH ═══════════
function openSearchOverlay() {
	document.getElementById("searchOverlay").classList.remove("hidden");
	setTimeout(() => document.getElementById("searchInput").focus(), 100);
	document.getElementById("searchDropdown").innerHTML = "";
}
function closeSearchOverlay() {
	document.getElementById("searchOverlay").classList.add("hidden");
}
function handleSearch(val) {
	const d = document.getElementById("searchDropdown");
	if (!d) return;
	if (!val.trim()) {
		d.innerHTML = "";
		return;
	}
	const res = PRODUCTS.filter(
		(p) =>
			p.name.toLowerCase().includes(val.toLowerCase()) ||
			p.brand.toLowerCase().includes(val.toLowerCase()) ||
			p.category.toLowerCase().includes(val.toLowerCase()),
	);
	if (!res.length) {
		d.innerHTML = `<p class="sor-empty">No results for "${val}"</p>`;
		return;
	}
	d.innerHTML = res
		.map(
			(p) => `
    <div class="sor-item" onclick="closeSearchOverlay();showProductDetail(${p.id})">
      <div class="sor-img"><img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'"/></div>
      <div class="sor-info">
        <p class="sor-name">${p.name}</p>
        <p class="sor-brand">${p.brand} &mdash; ${p.category}</p>
        <p class="sor-price">&#8369;${p.price.toLocaleString()}</p>
      </div>
      <span class="sor-arrow">&rarr;</span>
    </div>`,
		)
		.join("");
}
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		closeSearchOverlay();
		document.getElementById("mobPanel").classList.add("hidden");
		document.getElementById("mobOverlay").classList.add("hidden");
	}
});
document.addEventListener("click", (e) => {
	if (!e.target.closest(".ni-btn") && !e.target.closest(".acct-menu"))
		closeAccountMenu();
});

// ═══════════ REVIEWS ═══════════
function renderReviews() {
	const el = document.getElementById("reviewsGrid");
	if (!el) return;
	el.innerHTML = reviews
		.map(
			(r) => `
    <div class="review-card">
      <div class="review-stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
      <p class="review-text">"${r.text}"</p>
      <p class="review-author">${r.name}</p>
      <p class="review-product">${r.product}</p>
    </div>`,
		)
		.join("");
}
function openReviewModal() {
	document.getElementById("reviewModal").classList.remove("hidden");
}
function closeReviewModal() {
	document.getElementById("reviewModal").classList.add("hidden");
}
function setRating(n) {
	currentRating = n;
	document
		.querySelectorAll(".star")
		.forEach((s, i) => s.classList.toggle("active", i < n));
}
function submitReview() {
	const name = document.getElementById("revName")?.value.trim();
	const product = document.getElementById("revProduct")?.value;
	const text = document.getElementById("revText")?.value.trim();
	if (!name || !text || !currentRating) {
		showToast("Please fill in all fields.");
		return;
	}
	reviews.unshift({ name, product, rating: currentRating, text });
	renderReviews();
	closeReviewModal();
	showToast("Review submitted. Thanks!");
	document.getElementById("revName").value = "";
	document.getElementById("revText").value = "";
	currentRating = 0;
	document
		.querySelectorAll(".star")
		.forEach((s) => s.classList.remove("active"));
}

// ═══════════ AUTH ═══════════
function toggleAccountMenu() {
	document.getElementById("accountMenu").classList.toggle("hidden");
}
function closeAccountMenu() {
	document.getElementById("accountMenu")?.classList.add("hidden");
}
function updateAccountMenu() {
	const el = document.getElementById("accountMenuContent");
	if (!el) return;
	if (!currentUser) {
		el.innerHTML = `<a onclick="closeAccountMenu();showPage('auth')">Sign In</a><a onclick="closeAccountMenu();switchAuth('register');showPage('auth')">Register</a><a onclick="closeAccountMenu();showPage('tracking')">Track Order</a>`;
	} else if (currentUser.role === "admin") {
		el.innerHTML = `<div style="padding:10px 18px;font-family:var(--font-h);font-size:.62rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--muted)">Admin</div><a onclick="closeAccountMenu();showPage('admin')">Admin Dashboard</a><button onclick="doLogout()">Sign Out</button>`;
	} else {
		el.innerHTML = `<div style="padding:10px 18px;font-family:var(--font-h);font-size:.62rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--muted)">${currentUser.name}</div><a onclick="closeAccountMenu();showPage('dashboard')">My Account</a><a onclick="closeAccountMenu();showPage('tracking')">Track Order</a><button onclick="doLogout()">Sign Out</button>`;
	}
}
function switchAuth(mode) {
	const l = document.getElementById("authLogin");
	const r = document.getElementById("authRegister");
	const tabs = document.querySelectorAll(".auth-tab");
	if (mode === "login") {
		l.classList.remove("hidden");
		r.classList.add("hidden");
		tabs[0].classList.add("active");
		tabs[1].classList.remove("active");
	} else {
		l.classList.add("hidden");
		r.classList.remove("hidden");
		tabs[0].classList.remove("active");
		tabs[1].classList.add("active");
	}
}
function doLogin() {
	const email = document.getElementById("loginEmail")?.value.trim();
	const pass = document.getElementById("loginPass")?.value;
	const found = [...ACCOUNTS, ...registeredUsers].find(
		(a) => a.email === email && a.password === pass,
	);
	if (!found) {
		showToast("Invalid credentials. Try the hint below.");
		return;
	}
	currentUser = { email: found.email, name: found.name, role: found.role };
	localStorage.setItem("fs_user", JSON.stringify(currentUser));
	updateAccountMenu();
	showToast(`Welcome back, ${found.name}!`);
	if (found.role === "admin") showPage("admin");
	else showPage("dashboard");
}
function doRegister() {
	const first = document.getElementById("regFirst")?.value.trim();
	const last = document.getElementById("regLast")?.value.trim();
	const email = document.getElementById("regEmail")?.value.trim();
	const pass = document.getElementById("regPass")?.value;
	if (!first || !last || !email || !pass) {
		showToast("Please fill in all fields.");
		return;
	}
	if ([...ACCOUNTS, ...registeredUsers].find((a) => a.email === email)) {
		showToast("Email already registered.");
		return;
	}
	const nu = { email, password: pass, role: "user", name: first + " " + last };
	registeredUsers.push(nu);
	localStorage.setItem("fs_users", JSON.stringify(registeredUsers));
	currentUser = { email: nu.email, name: nu.name, role: "user" };
	localStorage.setItem("fs_user", JSON.stringify(currentUser));
	updateAccountMenu();
	showToast(`Welcome to FLEXStride, ${first}!`);
	showPage("dashboard");
}
function doLogout() {
	currentUser = null;
	localStorage.removeItem("fs_user");
	updateAccountMenu();
	showToast("Signed out. See you!");
	showPage("home");
}

// ═══════════ DASHBOARD ═══════════
function renderDashboard() {
	if (!currentUser) {
		showPage("auth");
		return;
	}
	const el = document.getElementById("dashWelcome");
	if (el) el.textContent = `Welcome back, ${currentUser.name}!`;
	renderUserOrders();
	renderUserProfile();
}
function switchDash(tab) {
	document
		.querySelectorAll("[id^=dash-]")
		.forEach((e) => e.classList.add("hidden"));
	document.getElementById("dash-" + tab)?.classList.remove("hidden");
	document
		.querySelectorAll(".dash-nav-btn")
		.forEach((b) => b.classList.remove("active"));
	event.target.classList.add("active");
}
function renderUserOrders() {
	const el = document.getElementById("ordersList");
	if (!el) return;
	el.innerHTML = `<div class="order-row header"><span>Order ID</span><span>Items</span><span>Total</span><span>Status</span></div>
    ${ORDERS_DATA.slice(0, 3)
			.map(
				(o) =>
					`<div class="order-row"><span style="color:var(--lime);font-family:var(--font-h);font-weight:700">${o.id}</span><span>${o.items}</span><span>${o.total}</span><span><span class="order-status status-${o.status.toLowerCase()}">${o.status}</span></span></div>`,
			)
			.join("")}`;
}
function renderUserProfile() {
	const el = document.getElementById("profileContent");
	if (!el || !currentUser) return;
	el.innerHTML = `<div style="max-width:400px;display:flex;flex-direction:column;gap:14px"><div class="form-group"><label>Name</label><input type="text" value="${currentUser.name}"/></div><div class="form-group"><label>Email</label><input type="email" value="${currentUser.email}"/></div><div class="form-group"><label>New Password</label><input type="password" placeholder="Leave blank to keep current"/></div><button class="btn-primary" onclick="showToast('Profile updated!')">Save Changes</button></div>`;
}

// ═══════════ ADMIN ═══════════
function renderAdminOverview() {
	renderAdminRecentOrders();
	renderInventoryTable();
	renderAdminOrdersTable();
	renderSuppliersTable();
	renderUsersTable();
	renderSalesChart();
}
function switchAdmin(panel) {
	document
		.querySelectorAll(".admin-panel")
		.forEach((p) => p.classList.add("hidden"));
	document.getElementById("admin-" + panel)?.classList.remove("hidden");
	document
		.querySelectorAll(".admin-nav-btn")
		.forEach((b) => b.classList.remove("active"));
	event.target.classList.add("active");
}
function renderAdminRecentOrders() {
	const el = document.getElementById("adminRecentOrders");
	if (!el) return;
	el.innerHTML = `<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th><th>Date</th></tr></thead><tbody>${ORDERS_DATA.slice(
		0,
		5,
	)
		.map(
			(o) =>
				`<tr><td style="color:var(--lime);font-family:var(--font-h);font-weight:700">${o.id}</td><td>${o.customer}</td><td>${o.items}</td><td>${o.total}</td><td><span class="order-status status-${o.status.toLowerCase()}">${o.status}</span></td><td>${o.date}</td></tr>`,
		)
		.join("")}</tbody></table></div>`;
}
function renderInventoryTable() {
	const el = document.getElementById("inventoryTable");
	if (!el) return;
	el.innerHTML = `<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Product</th><th>Brand</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th></tr></thead><tbody>${PRODUCTS.map(
		(p) => {
			const sc =
				p.stock === 0 ? "stock-out" : p.stock <= 10 ? "stock-low" : "stock-ok";
			const sl =
				p.stock === 0
					? "Out of Stock"
					: p.stock <= 10
						? "Low Stock"
						: "In Stock";
			return `<tr><td style="font-weight:600;color:var(--white)">${p.name}</td><td>${p.brand}</td><td>${p.category}</td><td>₱${p.price.toLocaleString()}</td><td class="${sc}">${p.stock} units</td><td><span class="order-status status-${p.stock === 0 ? "processing" : p.stock <= 10 ? "shipped" : "delivered"}">${sl}</span></td></tr>`;
		},
	).join("")}</tbody></table></div>`;
}
function renderAdminOrdersTable() {
	const el = document.getElementById("adminOrdersTable");
	if (!el) return;
	el.innerHTML = `<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th><th>Date</th><th>Action</th></tr></thead><tbody>${ORDERS_DATA.map((o) => `<tr><td style="color:var(--lime);font-family:var(--font-h);font-weight:700">${o.id}</td><td>${o.customer}</td><td>${o.items}</td><td>${o.total}</td><td><span class="order-status status-${o.status.toLowerCase()}">${o.status}</span></td><td>${o.date}</td><td><button class="btn-outline sm" onclick="showToast('Status updated!')">Update</button></td></tr>`).join("")}</tbody></table></div>`;
}
function renderSuppliersTable() {
	const el = document.getElementById("suppliersTable");
	if (!el) return;
	el.innerHTML = `<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Supplier</th><th>Materials</th><th>Location</th><th>Certification</th><th>Lead Time</th><th>Status</th></tr></thead><tbody>${SUPPLIERS_DATA.map((s) => `<tr><td style="font-weight:600;color:var(--white)">${s.name}</td><td>${s.materials}</td><td>${s.location}</td><td>${s.cert}</td><td>${s.leadDays} days</td><td><span class="order-status status-delivered">${s.status}</span></td></tr>`).join("")}</tbody></table></div>`;
}
function renderUsersTable() {
	const el = document.getElementById("usersTable");
	if (!el) return;
	const all = [
		...USERS_DATA,
		...registeredUsers
			.filter((u) => u.role !== "admin")
			.map((u) => ({
				name: u.name,
				email: u.email,
				role: "Customer",
				orders: 0,
				joined: "2025",
				status: "Active",
			})),
	];
	el.innerHTML = `<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Orders</th><th>Joined</th><th>Status</th></tr></thead><tbody>${all.map((u) => `<tr><td style="font-weight:600;color:var(--white)">${u.name}</td><td>${u.email}</td><td style="font-family:var(--font-h);font-size:.72rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${u.role === "Admin" ? "var(--lime)" : "var(--muted)"}">${u.role}</td><td>${u.orders}</td><td>${u.joined}</td><td><span class="order-status status-delivered">${u.status}</span></td></tr>`).join("")}</tbody></table></div>`;
}
function renderSalesChart() {
	const el = document.getElementById("salesChart");
	if (!el) return;
	const data = [
		{ name: "Nike LeBron 20", amount: 143988, pct: 100 },
		{ name: "Adidas Tour360 22", amount: 89991, pct: 62 },
		{ name: "Nike Air Zoom Pegasus 40", amount: 41394, pct: 29 },
		{ name: "ASICS Gel-Renma", amount: 27996, pct: 19 },
		{ name: "Puma RS-X", amount: 9998, pct: 7 },
	];
	el.innerHTML = data
		.map(
			(s) =>
				`<div class="sales-bar-row"><span class="sales-bar-label">${s.name}</span><div class="sales-bar-track"><div class="sales-bar-fill" style="width:${s.pct}%">₱${s.amount.toLocaleString()}</div></div></div>`,
		)
		.join("");
}

// ═══════════ CONTACT ═══════════
function submitContact(e) {
	e.preventDefault();
	showToast("Message sent! We'll reply within 24hrs.");
	e.target.reset();
}

// ═══════════ TRACKING ═══════════
function trackOrder() {
	const input = document.getElementById("trackingInput")?.value.trim();
	const res = document.getElementById("trackingResult");
	if (!input) {
		res.innerHTML = `<p class="muted">Please enter an order ID.</p>`;
		return;
	}
	const order = ORDERS_DATA.find(
		(o) => o.id.toLowerCase() === input.toLowerCase(),
	);
	if (!order) {
		res.innerHTML = `<div style="margin-top:20px;padding:24px;background:var(--navy-2);border:1px solid var(--border)"><p style="color:var(--muted)">No order found for <strong style="color:var(--white)">${input}</strong>. Please check the order ID.</p></div>`;
		return;
	}
	const steps = [
		{ label: "Order Placed", sub: order.date, state: "done" },
		{
			label: "Processing",
			sub: "Preparing your shoes",
			state:
				order.status === "Processing"
					? "current"
					: order.status !== "Shipped" && order.status !== "Delivered"
						? "pending"
						: "done",
		},
		{
			label: "Shipped",
			sub: "On its way to you",
			state:
				order.status === "Shipped"
					? "current"
					: order.status === "Delivered"
						? "done"
						: "pending",
		},
		{
			label: "Delivered",
			sub: "Enjoy your FLEXStride!",
			state: order.status === "Delivered" ? "done" : "pending",
		},
	];
	res.innerHTML = `<div style="margin-top:30px;padding:28px;background:var(--navy-2);border:1px solid var(--border-2)"><div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:14px;margin-bottom:24px"><div><p style="font-family:var(--font-h);font-size:.6rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--muted);margin-bottom:4px">Order ID</p><p style="font-family:var(--font-h);font-weight:700;color:var(--lime)">${order.id}</p></div><div><p style="font-family:var(--font-h);font-size:.6rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--muted);margin-bottom:4px">Total</p><p style="font-family:var(--font-d);font-size:1.4rem;color:var(--white)">${order.total}</p></div></div><div class="tracking-steps">${steps.map((s) => `<div class="tracking-step"><div class="step-dot ${s.state}">${s.state === "done" ? "✓" : s.state === "current" ? "●" : "○"}</div><div class="step-info"><h4>${s.label}</h4><p>${s.sub}</p></div></div>`).join("")}</div></div>`;
}

// ═══════════ MOBILE NAV ═══════════
function toggleMobile() {
	document.getElementById("mobPanel").classList.toggle("hidden");
	document.getElementById("mobOverlay").classList.toggle("hidden");
}

// ═══════════ TOAST ═══════════
function showToast(msg) {
	const t = document.getElementById("toast");
	t.textContent = msg;
	t.classList.add("show");
	setTimeout(() => t.classList.remove("show"), 3200);
}

// ═══════════ SCROLL ═══════════
window.addEventListener("scroll", () => {
	const nb = document.getElementById("navbar");
	if (nb)
		nb.style.boxShadow =
			window.scrollY > 20 ? "0 4px 30px rgba(0,0,0,.5)" : "none";
});
