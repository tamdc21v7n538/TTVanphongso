package com.vanphongso.tam.controller;

import com.vanphongso.tam.entity.Room;
import com.vanphongso.tam.Sevice.RoomService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    // ✅ GET ALL
    @GetMapping
    public List<Room> getAll() {
        return roomService.getAllRooms();
    }

    // ✅ GET BY ID
    @GetMapping("/{id}")
    public Room getById(@PathVariable Long id) {
        return roomService.getById(id);
    }

    // ✅ CREATE
    @PostMapping
    public Room create(@RequestBody Room room) {
        return roomService.create(room);
    }

    // ✅ UPDATE
    @PutMapping("/{id}")
    public Room update(@PathVariable Long id, @RequestBody Room room) {
        return roomService.update(id, room);
    }

    // ✅ DELETE
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        roomService.delete(id);
    }
}