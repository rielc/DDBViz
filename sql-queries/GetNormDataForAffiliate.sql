SELECT
	*
	-- affiliate_fct_normdata.value,
 --    affiliate_fct_items.facet_id as affiliate_fct_id,
 --    affiliate_fct.value as affiliate_fct,
 --    SUM(CASE WHEN (affiliate_fct_role.value LIKE '%_involved%') THEN 1 ELSE 0 END),
 --    SUM(CASE WHEN (affiliate_fct_role.value LIKE '%_subject%') THEN 1 ELSE 0 END),
	-- COUNT(*),
	-- COUNT( DISTINCT affiliate_fct_items.facet_id),
	-- COUNT( DISTINCT affiliate_fct_items.item_id)
FROM
    affiliate_fct_items
	INNER JOIN affiliate_fct ON
		affiliate_fct_items.facet_id = affiliate_fct.id
	INNER JOIN time_fct_items ON
		affiliate_fct_items.item_id = time_fct_items.item_id
	INNER JOIN affiliate_fct_role_items ON
		affiliate_fct_items.item_id = affiliate_fct_role_items.item_id
	INNER JOIN affiliate_fct_role ON
		affiliate_fct_role_items.facet_id = affiliate_fct_role.id
	INNER JOIN affiliate_fct_normdata_items ON
		affiliate_fct_items.item_id = affiliate_fct_normdata_items.item_id
	INNER JOIN affiliate_fct_normdata ON
		affiliate_fct_normdata_items.facet_id = affiliate_fct_normdata.id
WHERE
    affiliate_fct_items.facet_id = 6561 AND time_fct_items.facet_id = 2
GROUP BY affiliate_fct_normdata.value
LIMIT 100