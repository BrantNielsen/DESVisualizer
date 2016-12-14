# DES Visualizer

The application can be run by downloading the repository and visiting index.html within a web browser. The application is completely JavaScript and HTML based, so there is no backend communication with a server of any kind. The visualizer shows the encryption and decryption of a single block of data. The 64 bits of input data and the key can be specified as either an 8-character ASCII string or a 16-character Hexadecimal value on the page.

The interactive portion of the project uses HTML5 canvas, and was authored using Adobe Animate CC. The primary Animate source file (DES Visualizer.fla) can be found in the sources folder, along with the HTML template that it exports with.

The project also uses a JavaScript implementation of DES that was custom built for this project. The implementation saves the pre and post state of every data transformation in every round into a hierarchical JavaScript object, an example of which can be found in the file at js/test_result.js. The interactive visualization can then display the data from this object.

The DES implementation follows the implementation found in the book *Network Security: Private Communication in a Public World* Second Edition by Kaufman, Perlman, and Speciner. Permutation mappings and S-Box tables can be found in the source of the DES implementation as they are found in the book with formatting preserved. The DES implementation also uses an open source BitArray library originally found at <https://github.com/bramstein/bit-array>, but was heavily modified by us to correct errors in its implementation and add additional features that were convenient for our purposes.

The full JavaScript DES implementation can be found in js/des.js, and the BitArray JavaScript class can be found in js/bit-array-typed.js.
