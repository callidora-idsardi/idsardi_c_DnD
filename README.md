# Drag and Drop Reference

Fixing bugs in a Puzzle Drag and Drop game. 

Problem One:

You can drag and drop more than one puzzle piece into a drop zone - this shouldn’t happen. There should only be one piece in one drop zone at a time.

If the puzzle piece has a length of 0, it means that the drop zone is empty and we can add the dragged piece to it. If it has a length greater than 0, that means a puzzle piece is already there. 


** we can use the original drop function to solve this problem. 


Problem Two: 

The second bug is the problem with pieces appearing in the drop zones on reset / choosing a new puzzle. Those should be removed / reparented back to the drag zone as well, so that the player has a fresh board to drop onto.

Puzzle pieces remain in the dropzone when selecting a new puzzle. We need to figure out how to reparent the puzzle pieces back to the drag zone or remove them depending on the puzzle game chosen.



## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

Callidroa Idsardi 

## License
MIT
