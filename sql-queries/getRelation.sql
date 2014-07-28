SELECT 
    affiliate_fct_items.facet_id, count(DISTINCT affiliate_fct_items.item_id) as c, affiliate_fct.value
FROM
    affiliate_fct_items,
    affiliate_fct,
    time_fct_items,
    time_fct
WHERE
    affiliate_fct_items.facet_id = affiliate_fct.id AND
    affiliate_fct_items.item_id = time_fct_items.item_id AND
    time_fct.value = "time_62070" AND
    affiliate_fct_items.facet_id = 5 AND
    affiliate_fct_items.item_id IN (SELECT 
            affiliate_fct_items.item_id
        FROM
            affiliate_fct_items,
            time_fct_items,
            time_fct
        WHERE
            affiliate_fct_items.item_id = time_fct_items.item_id AND
            time_fct.value = "time_62070" AND
            affiliate_fct_items.facet_id = 4)
GROUP BY affiliate_fct_items.facet_id