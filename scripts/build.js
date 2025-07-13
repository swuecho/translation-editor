const fs = require('fs-extra');
const path = require('path');

async function build() {
    console.log('🔨 Building Translation Editor...');
    
    try {
        // Ensure dist directory exists
        await fs.ensureDir('dist');
        
        // Verify all required files exist
        const requiredFiles = [
            'dist/index.html',
            'dist/styles.css', 
            'dist/app.js'
        ];
        
        let allFilesExist = true;
        for (const file of requiredFiles) {
            if (!await fs.pathExists(file)) {
                console.error(`❌ Missing required file: ${file}`);
                allFilesExist = false;
            }
        }
        
        if (!allFilesExist) {
            console.error('❌ Build failed: Missing required files');
            process.exit(1);
        }
        
        // Copy any additional assets if they exist
        const assetsDir = 'assets';
        if (await fs.pathExists(assetsDir)) {
            await fs.copy(assetsDir, 'dist/assets');
            console.log('📁 Copied assets to dist/');
        }
        
        console.log('✅ Build completed successfully!');
        console.log('📦 Ready for publishing to npm');
        console.log('\nDistribution files:');
        
        const distFiles = await fs.readdir('dist');
        distFiles.forEach(file => {
            console.log(`   📄 dist/${file}`);
        });
        
    } catch (error) {
        console.error('❌ Build failed:', error.message);
        process.exit(1);
    }
}

build();