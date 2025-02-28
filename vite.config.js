import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	server: {
		host: '0.0.0.0', // อนุญาตให้เข้าถึงจากทุก IP
		port: 5173, // หรือพอร์ตที่คุณต้องการ
	}
});
