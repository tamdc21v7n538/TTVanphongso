package com.vanphongso.tam.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import com.vanphongso.tam.entity.Asset;
import com.vanphongso.tam.repository.AssetRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/assets")
public class AssetController {

    private final AssetRepository assetRepository;

    public AssetController(AssetRepository assetRepository) {
        this.assetRepository = assetRepository;
    }

    // ✅ GET ALL
    @GetMapping
    public List<Asset> getAll() {
        return assetRepository.findAll();
    }

    // ✅ CREATE
    @PostMapping
    public Asset create(@RequestBody Asset asset) {
        return assetRepository.save(asset);
    }

    // ✅ UPDATE
    @PutMapping("/{id}")
    public Asset update(@PathVariable Long id, @RequestBody Asset asset) {
        Asset existing = assetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Asset not found"));

        existing.setName(asset.getName());
        existing.setQuantity(asset.getQuantity());
        existing.setStatus(asset.getStatus());

        return assetRepository.save(existing);
    }

    // ✅ DELETE
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        assetRepository.deleteById(id);
    }
}