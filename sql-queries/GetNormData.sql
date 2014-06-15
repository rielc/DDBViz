SELECT 
    affiliate_fct_items.facet_id as affiliate_fct_id,
    affiliate_fct.value as affiliate_fct,
    count(DISTINCT affiliate_fct_items.facet_id) as affiliate_fct_occurrence,
    affiliate_fct.value affiliate_fct,
    SUM(CASE WHEN (affiliate_fct_role.value LIKE '%_involved%' AND affiliate_fct.id = 7819) THEN 1 ELSE 0 END)
FROM
    affiliate_fct_items,
    affiliate_fct,
    time_fct_items,
    affiliate_fct_normdata_items,
    affiliate_fct_normdata,
    affiliate_fct_role_items,
    affiliate_fct_role
WHERE
    affiliate_fct_items.facet_id = affiliate_fct.id
        AND time_fct_items.item_id = affiliate_fct_items.item_id
        AND time_fct_items.facet_id = 9

        AND affiliate_fct_items.item_id = affiliate_fct_normdata_items.item_id
        AND affiliate_fct_normdata_items.facet_id = affiliate_fct_normdata.id

        AND affiliate_fct_items.item_id = affiliate_fct_role_items.item_id
        AND affiliate_fct_role_items.facet_id = affiliate_fct_role.id

        AND affiliate_fct_items.item_id IN (SELECT 
            affiliate_fct_items.item_id
        FROM
            affiliate_fct_items,
            time_fct_items
        WHERE
            time_fct_items.item_id = affiliate_fct_items.item_id
                AND affiliate_fct_items.facet_id = 7819
                AND time_fct_items.facet_id = 9)

GROUP BY facet_id
ORDER BY occurrence DESC
LIMIT 100