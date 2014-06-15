SELECT 
    affiliate_fct_items.facet_id as affiliate_fct_id,
    affiliate_fct.value as affiliate_fct,
    count(DISTINCT affiliate_fct_items.facet_id) as affiliate_fct_occurrence

FROM
    affiliate_fct_items,
    affiliate_fct,
    time_fct_items
WHERE
    affiliate_fct_items.facet_id = affiliate_fct.id
        AND time_fct_items.item_id = affiliate_fct_items.item_id

        AND affiliate_fct_items.item_id IN (SELECT 
            affiliate_fct_items.item_id
        FROM
            affiliate_fct_items,
            time_fct_items
        WHERE
            time_fct_items.item_id = affiliate_fct_items.item_id
                AND affiliate_fct_items.facet_id = 7819
                AND time_fct_items.facet_id = 9)

GROUP BY affiliate_fct_id
ORDER BY affiliate_fct_occurrence DESC
LIMIT 100