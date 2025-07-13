#!/usr/bin/env node

const express = require('express');
const path = require('path');
const open = require('open');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the dist directory
const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));

// Handle client-side routing by serving index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`\n🌐 Translation Editor is running at:`);
    console.log(`   Local:   http://localhost:${port}`);
    console.log(`\n📝 Features:`);
    console.log(`   • Multi-language translation editing`);
    console.log(`   • Excel import/export capabilities`);
    console.log(`   • Real-time validation and search`);
    console.log(`   • Configurable file paths`);
    console.log(`\n💡 Press Ctrl+C to stop the server\n`);
    
    // Open browser automatically
    open(`http://localhost:${port}`).catch(() => {
        console.log('Could not open browser automatically. Please visit the URL above manually.');
    });
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Translation Editor server stopped');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n👋 Translation Editor server stopped');
    process.exit(0);
});