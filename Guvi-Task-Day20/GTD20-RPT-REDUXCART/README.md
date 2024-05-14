# GTD20-RPT-REDUXCART - Using React Redux Tool
    - For each items in cart Use + and - => 
        - To Increase and Decrease purchase qty.

    Validations/Functionality
    - When Using + for increase purchase qty,
        - then particular item stock reduces, also displays stock availability .
            "In Stock"  -> until reaches 0.
            "Out of Stock"  -> when reached 0.
        - also item total amount and grandtotal amount increased.
        - cannot increase more than stock availability.

    - When Using - for reducing purchase qty,
        - then particular item stock increases, also displays stock availability.
            "In Stock"  -> until reaches max availability.
        - also item total amount and grandtotal amount decreased.
        - cannot decrease below 1.