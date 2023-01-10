SELECT `Bookmark`.`id`, `Bookmark`.`user_id`
AS `userId`, `Bookmark`.`product_id` 
AS `productId`, `Bookmark`.`price`, `Bookmark`.`size`, `Bookmark`.`category`, `Bookmark`.`drink_type` 
AS `drinkType`, `Bookmark`.`eat_type` 
AS `eatType`, `Bookmark`.`cook_type` 
AS `cookType`, `Bookmark`.`created_at` 
AS `createdAt`, `Bookmark`.`updated_at` 
AS `updatedAt`, `Product`.`id` 
AS `Product.id`, `Product`.`name` 
AS `Product.name`, `Product`.`p_id` 
AS `Product.p_id` 
FROM `bookmarks` 
AS `Bookmark` 
LEFT OUTER JOIN 
`products` 
AS `Product` 
ON `Bookmark`.`product_id`= `Product`.`id` 
 WHERE `Bookmark`.`user_id` = 1;